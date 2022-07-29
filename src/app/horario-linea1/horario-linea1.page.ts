import { Component, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ModalHorarioPage } from '../modal-horario/modal-horario.page';

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

  //MODAL de HORARIO
  async verHorarioModal(estacionNombre: string) {
    const modal = await this.modalController.create({
      component: ModalHorarioPage,
      componentProps: {
        estacion: estacionNombre,
      }
    });

    await modal.present();
  }
}
