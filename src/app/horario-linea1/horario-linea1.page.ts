import { Component, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-horario-linea1',
  templateUrl: './horario-linea1.page.html',
  styleUrls: ['./horario-linea1.page.scss'],
})
export class HorarioLinea1Page {

  horainicial = 5;

  horariosLinea1 = [
    { hora: "05:54", },
    { hora: "06:04", },
    { hora: "06:14", },
    { hora: "06:24", },
    { hora: "06:34", },
    { hora: "06:44", },
    { hora: "06:54", },
    { hora: "07:04", },
    { hora: "07:14", },
    { hora: "07:24", },
    { hora: "07:34", },
    { hora: "07:44", },
    { hora: "07:54", },
    { hora: "08:04", },
    { hora: "08:14", },
    { hora: "08:24", },
    { hora: "08:34", },
    { hora: "08:44", },
    { hora: "08:54", },
    { hora: "09:04", },
    { hora: "09:14", },
    { hora: "09:24", },
    { hora: "09:34", },
    { hora: "09:44", },
    { hora: "09:54", },
    { hora: "10:04", },
    { hora: "10:14", },
    { hora: "10:24", },
    { hora: "10:34", },
    { hora: "10:44", },
    { hora: "10:54", },
    { hora: "11:04", },
    { hora: "11:14", },
    { hora: "11:24", },
    { hora: "11:34", },
    { hora: "11:44", },
    { hora: "11:54", },
    { hora: "12:04", },
    { hora: "12:14", },
    { hora: "12:24", },
    { hora: "12:34", },
    { hora: "12:44", },
    { hora: "12:54", },
    { hora: "13:04", },
    { hora: "13:14", },
    { hora: "13:24", },
    { hora: "13:34", },
    { hora: "13:44", },
  ]

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
