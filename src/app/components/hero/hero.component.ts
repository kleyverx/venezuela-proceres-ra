import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative bg-yellow-400 text-gray-800 min-h-[80vh] py-4 sm:py-8 lg:py-32 overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center z-0" style="background-image: url('/assets/simon_bolivar_background.jpg'); opacity: 0.3;"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 
          class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-blue-900"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Próceres de Venezuela en Realidad Aumentada
        </h2>
        <p 
          class="text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 lg:mb-8 text-blue-800"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Explora la historia de los héroes que forjaron nuestra independencia
        </p>
        <p 
          class="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-blue-700"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Simón Bolívar · Francisco de Miranda · José Antonio Páez
        </p>
        <button 
          (click)="scrollToAR()"
          class="bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 inline-block"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Comenzar Experiencia RA
        </button>
      </div>
      <div class="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-full">
          <path fill="#ffffff" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  `,
})
export class HeroComponent {
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

