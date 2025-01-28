import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import * as AOS from 'aos';

@Component({
  selector: "app-features",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-4 sm:py-8 lg:py-20 bg-white overflow-hidden">
      <div class="container mx-auto px-4">
        <h2 
          class="text-lg sm:text-2xl lg:text-4xl font-bold text-center mb-4 sm:mb-8 lg:mb-12"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Características de nuestra Experiencia RA
        </h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div 
            class="bg-yellow-50 p-4 sm:p-6 lg:p-8 rounded-xl text-center border-t-4 border-yellow-400 shadow-lg hover:shadow-xl transition-shadow"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <div class="w-12 sm:w-16 h-12 sm:h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-base sm:text-lg lg:text-xl font-bold mb-2 text-yellow-800">Contenido Histórico</h3>
            <p class="text-xs sm:text-sm lg:text-base text-yellow-700">Aprende sobre la vida de los próceres de manera interactiva y detallada.</p>
          </div>

          <div 
            class="bg-blue-50 p-4 sm:p-6 lg:p-8 rounded-xl text-center border-t-4 border-blue-500 shadow-lg hover:shadow-xl transition-shadow"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div class="w-12 sm:w-16 h-12 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-base sm:text-lg lg:text-xl font-bold mb-2 text-blue-800">Experiencia Inmersiva</h3>
            <p class="text-xs sm:text-sm lg:text-base text-blue-700">Sumérgete en la época de El Libertador con tecnología de Realidad Aumentada.</p>
          </div>

          <div 
            class="bg-red-50 p-4 sm:p-6 lg:p-8 rounded-xl text-center border-t-4 border-red-500 shadow-lg hover:shadow-xl transition-shadow"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <div class="w-12 sm:w-16 h-12 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-base sm:text-lg lg:text-xl font-bold mb-2 text-red-800">Accesibilidad Móvil</h3>
            <p class="text-xs sm:text-sm lg:text-base text-red-700">Accede a la experiencia desde tu dispositivo móvil en cualquier momento y lugar.</p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class FeaturesComponent {
  ngOnInit() {
    AOS.init({
      once: true, // La animación solo ocurre una vez
      mirror: false,
      offset: 100
    });
  }
}

