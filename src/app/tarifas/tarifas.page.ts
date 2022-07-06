import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.page.html',
  styleUrls: ['./tarifas.page.scss'],
})
export class TarifasPage  {

  constructor(
    private modalController: ModalController
  ) { }

  salirRecarga() {
    this.modalController.dismiss();
  }
}
