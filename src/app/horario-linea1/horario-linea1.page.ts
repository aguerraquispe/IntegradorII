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


  //BUSCAR  ESTACION EN LA LISTA
  estaciones = [
    {
      id: 1,
      nombre: 'Estación Bayóvar'
    },
    {
      id: 2,
      nombre: 'Estación Santa Rosa'
    },
    {
      id: 3,
      nombre: 'Estación San Martin'
    },
    {
      id: 4,
      nombre: 'Estación San Carlos'
    },
    {
      id: 5,
      nombre: 'Estación Los Postes'
    },
    {
      id: 6,
      nombre: 'Estación Los Jardines'
    },
    {
      id: 7,
      nombre: 'Estación Pirámide del Sol'
    },
    {
      id: 8,
      nombre: 'Estación Caja de Agua'
    },
    {
      id: 9,
      nombre: 'Estación Presbítero Maestro'
    },
    {
      id: 10,
      nombre: 'Estación El Ángel'
    },
    {
      id: 12,
      nombre: 'Estación Grau'
    },
    {
      id: 12,
      nombre: 'Estación Gamarra'
    },
    {
      id: 13,
      nombre: 'Estación Arriola'
    },
    {
      id: 14,
      nombre: 'Estación La Cultura'
    },
    {
      id: 15,
      nombre: 'Estación San Borja Sur'
    },
    {
      id: 16,
      nombre: 'Estación Angamos'
    },
    {
      id: 17,
      nombre: 'Estación Cabitos'
    },
    {
      id: 18,
      nombre: 'Estación Ayacucho'
    },
    {
      id: 19,
      nombre: 'Estación Jórge Chavez'
    },
    {
      id: 20,
      nombre: 'Estación Atocongo'
    },
    {
      id: 21,
      nombre: 'Estación San Juan'
    },
    {
      id: 22,
      nombre: 'Estación María Auxiliadora'
    },
    {
      id: 23,
      nombre: 'Estación Villa María'
    },
    {
      id: 24,
      nombre: 'Estación Pumacahua'
    },
    {
      id: 25,
      nombre: 'Estación Parque industrial'
    },
    {
      id: 26,
      nombre: 'Estación Villa el Salvador'
    },
  ];
  
  textoBuscar = '';
  buscar(event) {
    this.textoBuscar = event.detail.value;
  }
}
