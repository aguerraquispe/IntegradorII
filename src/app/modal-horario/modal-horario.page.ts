import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-horario',
  templateUrl: './modal-horario.page.html',
  styleUrls: ['./modal-horario.page.scss'],
})
export class ModalHorarioPage implements OnInit {

  @Input() estacion;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  retornar() {
    this.modalController.dismiss();
  }

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
}
