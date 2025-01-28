import { Component, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var AFRAME: any;

interface Procer {
  id: string;
  imageSource: string;
  audioSource: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-ar-experience',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Próceres de Venezuela en AR</h2>
        
        <!-- Lista de próceres -->
        <div *ngIf="!showingAR" class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div *ngFor="let procer of proceres" 
               class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold mb-2">{{procer.title}}</h3>
            <p class="text-gray-600 mb-4">{{procer.description}}</p>
            <button 
              (click)="startARExperience(procer)"
              class="w-full bg-blue-500 text-white px-4 py-2 rounded"
            >
              Ver en AR
            </button>
          </div>
        </div>

        <!-- Experiencia AR -->
        <div *ngIf="showingAR" class="ar-experience">
          <!-- Controles -->
          <div class="fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-50 bg-black bg-opacity-50">
            <button 
              (click)="closeAR()"
              class="bg-white px-4 py-2 rounded"
            >
              Volver
            </button>
            <div *ngIf="!showPattern">
              <button 
                (click)="playAudio()"
                class="bg-green-500 text-white px-4 py-2 rounded mr-2"
              >
                Audio
              </button>
              <button 
                (click)="toggleCamera()"
                class="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Cambiar Cámara
              </button>
            </div>
          </div>

          <!-- Pantalla de patrón -->
          <div *ngIf="showPattern" class="fixed inset-0 bg-white z-40 p-4">
            <div class="max-w-md mx-auto text-center">
              <h3 class="text-xl font-bold mb-4">Escanea este patrón</h3>
              <img src="assets/hiro.png" alt="Patrón Hiro" class="mb-4 w-full">
              <button 
                (click)="initCamera()"
                class="bg-green-500 text-white px-6 py-3 rounded-full text-lg"
              >
                Iniciar Cámara
              </button>
            </div>
          </div>

          <!-- Vista AR -->
          <div *ngIf="!showPattern" 
               class="ar-container fixed inset-0 z-30"
               [style.display]="cameraActive ? 'block' : 'none'">
            <a-scene embedded
                     [attr.arjs]="arConfig"
                     vr-mode-ui="enabled: false"
                     renderer="antialias: true; alpha: true"
                     [style.display]="cameraActive ? 'block' : 'none'">
              <a-assets>
                <img [id]="'procer-img-' + selectedProcer?.id" 
                     [src]="selectedProcer?.imageSource" 
                     crossorigin="anonymous">
              </a-assets>

              <a-marker preset="hiro"
                        smooth="true"
                        smoothCount="5"
                        smoothTolerance="0.01"
                        smoothThreshold="2"
                        (markerFound)="onMarkerFound()"
                        (markerLost)="onMarkerLost()">
                <a-image [attr.src]="'#procer-img-' + selectedProcer?.id"
                         position="0 0.5 0"
                         rotation="-90 0 0"
                         scale="1 1 1"
                         material="alphaTest: 0.5;">
                </a-image>
                <a-entity [id]="'audio-' + selectedProcer?.id"
                         [attr.sound]="'src: url(' + selectedProcer?.audioSource + '); autoplay: false;'">
                </a-entity>
              </a-marker>
              
              <a-entity camera></a-entity>
            </a-scene>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .ar-experience {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1000;
      background: black;
    }
    
    .ar-container {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    :host ::ng-deep a-scene {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  `]
})
export class ArExperienceComponent implements OnInit, OnDestroy {
  showingAR = false;
  showPattern = true;
  cameraActive = false;
  selectedProcer: Procer | null = null;
  currentFacingMode: 'environment' | 'user' = 'environment';
  videoStream: MediaStream | null = null;

  get arConfig(): string {
    return `sourceType: webcam; 
            debugUIEnabled: false; 
            detectionMode: mono_and_matrix; 
            matrixCodeType: 3x3;
            sourceWidth:1280; 
            sourceHeight:960;
            displayWidth: 1280; 
            displayHeight: 960;
            facingMode: ${this.currentFacingMode};`;
  }

  proceres: Procer[] = [
    {
      id: 'fdm',
      imageSource: './assets/FDM.png',
      audioSource: './assets/FDM.mp3',
      title: 'Francisco de Miranda',
      description: 'El Precursor de la independencia de Venezuela'
    },
    {
      id: 'jap',
      imageSource: './assets/JAP.png',
      audioSource: './assets/JAP.mp3',
      title: 'José Antonio Páez',
      description: 'El Centauro de los Llanos'
    },
    {
      id: 'sb',
      imageSource: './assets/SB.png',
      audioSource: './assets/SB.mp3',
      title: 'Simón Bolívar',
      description: 'El Libertador'
    }
  ];

  constructor() {}

  ngOnInit() {
    this.loadScripts();
    this.setupVisibilityChange();
  }

  ngOnDestroy() {
    this.stopCamera();
  }

  private setupVisibilityChange() {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.pauseCamera();
      } else {
        this.resumeCamera();
      }
    });
  }

  private async loadScripts() {
    try {
      await Promise.all([
        this.loadScript('https://aframe.io/releases/1.2.0/aframe.min.js'),
        this.loadScript('https://cdn.jsdelivr.net/gh/AR-js-org/AR.js/aframe/build/aframe-ar.min.js')
      ]);
    } catch (error) {
      console.error('Error loading AR scripts:', error);
    }
  }

  private loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve();
      script.onerror = () => reject();
      document.head.appendChild(script);
    });
  }

  async startARExperience(procer: Procer) {
    this.selectedProcer = procer;
    this.showingAR = true;
    this.showPattern = true;
  }

  async initCamera() {
    try {
      await this.requestCameraPermission();
      this.showPattern = false;
      this.cameraActive = true;
      
      // Forzar reflow del DOM
      setTimeout(() => {
        const scene = document.querySelector('a-scene');
        if (scene) {
          (scene as any).components.embedded.resize();
        }
      }, 100);

    } catch (error) {
      console.error('Error initializing camera:', error);
      alert('Error accessing camera. Please check permissions.');
    }
  }

  private async requestCameraPermission(): Promise<void> {
    const constraints = {
      video: {
        facingMode: this.currentFacingMode,
        width: { ideal: 1280 },
        height: { ideal: 960 }
      }
    };

    try {
      this.videoStream = await navigator.mediaDevices.getUserMedia(constraints);
    } catch (error) {
      console.error('Camera permission error:', error);
      throw error;
    }
  }

  async toggleCamera() {
    this.currentFacingMode = this.currentFacingMode === 'environment' ? 'user' : 'environment';
    this.stopCamera();
    await this.initCamera();
  }

  private stopCamera() {
    if (this.videoStream) {
      this.videoStream.getTracks().forEach(track => track.stop());
      this.videoStream = null;
    }
    this.cameraActive = false;
  }

  private pauseCamera() {
    if (this.videoStream) {
      this.videoStream.getTracks().forEach(track => track.enabled = false);
    }
  }

  private resumeCamera() {
    if (this.videoStream) {
      this.videoStream.getTracks().forEach(track => track.enabled = true);
    }
  }

  closeAR() {
    this.stopCamera();
    this.showingAR = false;
    this.showPattern = true;
    this.selectedProcer = null;
  }

  playAudio() {
    if (!this.selectedProcer) return;
    const audioEl = document.querySelector(`#audio-${this.selectedProcer.id}`);
    if (audioEl && (audioEl as any).components?.sound) {
      (audioEl as any).components.sound.playSound();
    }
  }

  onMarkerFound() {
    console.log('Marker found');
  }

  onMarkerLost() {
    console.log('Marker lost');
  }
}