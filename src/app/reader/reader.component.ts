import { Component } from "@angular/core";
import { BarcodeFormat } from "@zxing/library";

@Component({
  selector: "app-reader",
  template: `
    <div class="flex flex-col items-center">
      <zxing-scanner
        [formats]="allowedFormats"
        [tryHarder]="true"
        (scanSuccess)="qrResultString = $event"
      ></zxing-scanner>

      <section class="flex flex-row items-center justify-center space-x-2 mt-2">
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
  public loading = false;

  public qrResultString: string | null = null;
  public allowedFormats = [BarcodeFormat.QR_CODE, BarcodeFormat.CODE_128];

  constructor() {}

  public clearResult(): void {
    this.qrResultString = null;
  }
}
