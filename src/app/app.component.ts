import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="flex flex-col h-screen items-center p-4">
      <div class="max-w-lg space-y-8">
        <h1 class="text-4xl text-center font-bold">
          Magna reader proof of concept
        </h1>

        <p class="text-center">
          Este proyecto es una prueba de concepto para leer códigos de barras
          usando la cámara web de un dispositivo. Actualmente solo se soporta el
          estándar <b>Code 128 (EAN-128)</b> y <b>QR</b>.
        </p>

        <main class="flex flex-col">
          <router-outlet></router-outlet>
        </main>

        <p class="text-center">
          <b>NOTA</b>: Para realizar todo el proceso de lectura de códigos de
          barras es necesario que el navegador tenga acceso a las siguientes
          APIs: Blob constructing, Blob URLs, Typed Arrays, getUserMedia/Stream
          API, Web Workers y Canvas. Puedes acceder al siguiente enlace para
          comprobar si tu navegador es compatible:
          <a
            href="https://caniuse.com/webworkers,canvas,typedarrays,bloburls,blobbuilder,stream"
            target="_blank"
            class="text-blue-500 underline hover:text-blue-700"
            >clic aquí</a
          >
        </p>
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = "magna-poc";
}
