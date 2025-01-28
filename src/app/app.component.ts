import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { ProceresListComponent } from './components/proceres-list/proceres-list.component';
import { ArExperienceComponent } from './components/ar-experience/ar-experience.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    ProceresListComponent,
    ArExperienceComponent,
    FooterComponent,
  ],
  template: `
    <div class="min-h-screen bg-primary-bg">
      <app-header></app-header>
      <main>
        <app-hero></app-hero>
        <app-features></app-features>
        <app-proceres-list></app-proceres-list>
        <app-ar-experience></app-ar-experience>
      </main>
      <app-footer></app-footer>
    </div>
  `,
})
export class AppComponent {}
