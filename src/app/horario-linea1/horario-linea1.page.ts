import { Component, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-horario-linea1',
  templateUrl: './horario-linea1.page.html',
  styleUrls: ['./horario-linea1.page.scss'],
})
export class HorarioLinea1Page {

  @ViewChild(IonModal) modal: IonModal;

  constructor(
    private modalController: ModalController
  ) { }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
  }

  salirRecarga() {
    this.modalController.dismiss();
  }

}
