import { Component } from "@angular/core";
import { BarcodeFormat } from "@zxing/library";

@Component({
  selector: "app-reader",
  template: `
    <div class="flex flex-col items-center">
      <select
        class="w-full max-w-lg mb-2 p-2 rounded shadow bg-gray-100"
        (change)="onDeviceSelectChange($event.target)"
      >
        <option
          *ngFor="let device of availableDevices"
          [value]="device.deviceId"
        >
          {{ device.label }}
        </option>
      </select>

      <!-- Scanner de códigos con botón de encendido de linterna (posición relativa) -->
      <div class="relative w-full max-w-lg">
        <zxing-scanner
          [formats]="allowedFormats"
          [tryHarder]="true"
          [autofocusEnabled]="true"
          [torch]="torchEnabled"
          (scanSuccess)="qrResultString = $event"
          (camerasFound)="onCamerasFound($event)"
          (camerasNotFound)="onCamerasNotFound()"
          (permissionResponse)="onPermissionResponse($event)"
        ></zxing-scanner>
        <button
          class="absolute top-0 right-0 m-2 p-2 bg-blue-500 text-white rounded shadow"
          (click)="torchEnabled = !torchEnabled"
        >
          {{ torchEnabled ? "Apagar" : "Encender" }} linterna
        </button>
      </div>

      <section
        class="flex flex-row items-center justify-center space-x-2 mt-2 bg-gray-100 p-2 rounded w-full max-w-lg"
      >
        <div>
          <small>Resultado: </small>
          <strong>{{ qrResultString ?? "Esperando resultado" }}</strong>
        </div>
        <button (click)="clearResult()" *ngIf="qrResultString">&times;</button>
      </section>
    </div>
  `,
  styles: [],
})
export class ReaderComponent {
  public availableDevices: MediaDeviceInfo[] = [];
  public currentDevice: MediaDeviceInfo | null = null;

  public torchEnabled = false;
  public qrResultString: string | null = null;
  public allowedFormats = [BarcodeFormat.QR_CODE, BarcodeFormat.CODE_128];

  constructor() {}

  public onDeviceSelectChange(selected: EventTarget | null): void {
    if (selected instanceof HTMLSelectElement) {
      const device = this.availableDevices.find(
        (x) => x.deviceId === selected.value
      );
      this.currentDevice = device || null;
    }
  }

  public clearResult(): void {
    this.qrResultString = null;
  }

  public onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
  }

  public onCamerasNotFound(): void {
    alert("No se encontraron cámaras en el dispositivo para escanear");
  }

  public onPermissionResponse(test: boolean): void {
    if (test) return;

    alert("No se han concedido permisos para usar la cámara");
  }
}
