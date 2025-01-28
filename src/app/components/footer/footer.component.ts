import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto text-center">
        <p>&copy; 2023 Simón Bolívar en RA. Todos los derechos reservados.</p>
        <div class="mt-4">
          <a href="#" class="text-gray-400 hover:text-white mx-2">Política de Privacidad</a>
          <a href="#" class="text-gray-400 hover:text-white mx-2">Términos de Servicio</a>
          <a href="#" class="text-gray-400 hover:text-white mx-2">Contacto</a>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {}

