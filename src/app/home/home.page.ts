import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HorarioLinea1Page } from '../horario-linea1/horario-linea1.page';
import { TarifasPage } from '../tarifas/tarifas.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private modalController: ModalController
  ) { }


  buscar(event) {
    console.log(event);
  }

  option = {
    slidesPerView: 1.5,
    centeredSlides: true
  }

  async horarioLine1() {
    const modal = await this.modalController.create({
      component: HorarioLinea1Page
    });

    await modal.present();
  }

  async tarifario() {
    const modalTarifa = await this.modalController.create({
      component: TarifasPage
    });

    await modalTarifa.present();
  }
}
