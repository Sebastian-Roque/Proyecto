import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage {
  scanResult: string | null = null;
  isScanning: boolean = false;

  constructor() {}

  async startScan() {
    try {
      // Verificar si estamos en un entorno web o móvil
      const isWeb = typeof window !== 'undefined' && !BarcodeScanner.startScan;

      // Solicitar permiso para usar la cámara
      const status = await BarcodeScanner.checkPermission({ force: true });

      if (status.granted) {
        this.isScanning = true;

        // Mostrar nota si estamos en un entorno web
        if (isWeb) {
          alert('Nota: La cámara se habilitará en el navegador.');
        }

        BarcodeScanner.hideBackground(); // Oculta el fondo para mejorar visibilidad

        const result = await BarcodeScanner.startScan(); // Inicia el escaneo
        this.isScanning = false;

        if (result.hasContent) {
          this.scanResult = result.content; // Almacena el resultado del código QR
        } else {
          alert('No se encontró contenido en el código QR.');
        }
      } else {
        alert('Permiso denegado para usar la cámara.');
      }
    } catch (error) {
      console.error('Error al escanear el código QR:', error);
      this.stopScan();
    }
  }

  stopScan() {
    BarcodeScanner.stopScan(); // Detiene el escáner
    this.isScanning = false;
  }
}
