import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-tarjeta',
  templateUrl: './modal-tarjeta.page.html',
  styleUrls: ['./modal-tarjeta.page.scss'],
})
export class ModalTarjetaPage {

  @Input() id: number;
  @Input() saldo: number;

  recargarTarjeta = new FormControl('', [
    Validators.required,
    Validators.max(50),
    Validators.min(1)
  ]);

  constructor(
    private modalCtrl: ModalController
  ) { }

  salirRecarga() {
    this.modalCtrl.dismiss(null, 'cancelado');
  }

  guardarRecarga() {
    const montoAgregado = this.recargarTarjeta.value;
    const nuevoSaldo = this.saldo + this.recargarTarjeta.value;
    this.modalCtrl.dismiss({ montoAgregado, nuevoSaldo }, 'recargaRealizada');
  }
}
