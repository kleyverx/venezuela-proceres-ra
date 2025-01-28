import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Procer {
  nombre: string
  descripcion: string
  imagen: string
  arDisponible: boolean
}

@Component({
  selector: "app-proceres-list",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-4 sm:py-8 lg:py-20 bg-gray-100 overflow-hidden">
      <div class="container mx-auto px-4">
        <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-8 lg:mb-16 text-blue-900">
          Próceres Destacados en Realidad Aumentada
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-12">
          <div *ngFor="let procer of proceres" 
            class="bg-white rounded-xl shadow-lg sm:shadow-xl overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
          >
            <div class="relative">
              <img [src]="procer.imagen" [alt]="procer.nombre" class="w-full h-40 sm:h-48 lg:h-64 object-cover">
              <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
              <h4 class="absolute bottom-2 sm:bottom-3 left-3 sm:left-4 text-lg sm:text-xl lg:text-3xl font-bold text-white leading-tight">
                {{ procer.nombre }}
              </h4>
            </div>
            <div class="p-3 sm:p-4 lg:p-6">
              <p class="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4">{{ procer.descripcion }}</p>
              <button 
                (click)="scrollToAR()"
                class="inline-block bg-blue-600 text-white px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 text-xs sm:text-sm lg:text-base rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Ver en RA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ProceresListComponent {
  proceres: Procer[] = [
    {
      nombre: "Simón Bolívar",
      descripcion:
        "El Libertador, líder de la independencia de varios países sudamericanos. Nació en Caracas en 1783 y falleció en Santa Marta en 1830. Su visión de una América Latina unida inspiró a generaciones.",
      imagen: "/assets/simon-bolivar.png",
      arDisponible: true,
    },
    {
      nombre: "Francisco de Miranda",
      descripcion:
        "El Precursor de la Independencia, creador de la bandera venezolana. Nació en Caracas en 1750 y falleció en Cádiz en 1816. Su vida fue una constante lucha por la libertad de América Latina.",
      imagen: "/assets/francisco-miranda.jpg",
      arDisponible: true,
    },
    {
      nombre: "José Antonio Páez",
      descripcion:
        "El León de Payara, primer presidente de Venezuela como república independiente. Nació en Curpa en 1790 y falleció en Nueva York en 1873. Su liderazgo militar fue crucial en la independencia.",
      imagen: "/assets/jose-paez.jpg",
      arDisponible: true,
    }
  ]

  scrollToAR() {
    const arSection = document.querySelector('#ar-experience');
    if (arSection) {
      arSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}

