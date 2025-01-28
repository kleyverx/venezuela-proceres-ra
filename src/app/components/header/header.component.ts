import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-lg overflow-hidden">
      <div class="container mx-auto flex justify-between items-center max-w-full">
        <div class="flex items-center space-x-3">
          <img src="/assets/venezuela-flag.jpg" alt="Bandera de Venezuela" class="h-10 w-10" />
          <h1 class="text-2xl sm:text-3xl font-bold">Próceres de Venezuela en RA</h1>
        </div>
        <nav>
          <ul class="flex space-x-6">
            <li><a href="#" class="hover:text-yellow-300 transition duration-300 ease-in-out">Contacto</a></li>
          </ul>
        </nav>
      </div>
      <div class="text-center mt-2">
        <p class="text-sm sm:text-base">Explora la historia de nuestros próceres en Realidad Aumentada</p>
      </div>
    </header>
  `,
})
export class HeaderComponent {}

