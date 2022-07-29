import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalTarjetaPage } from '../modal-tarjeta/modal-tarjeta.page';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.page.html',
  styleUrls: ['./tarjetas.page.scss'],
})
export class TarjetasPage implements OnInit {

  tarjetasMonto = [
    {
      id: 1,
      clase: "tarjeta_general",
      tipo: "GENERAL",
      saldo: 60.00,
      propietario: "David Robles",
      movimientos: [
        {
          tipo: "RECARGA",
          fecha: "18/05/2022",
          hora: "12:41 PM",
          monto: "8.00",
          clase: "plusEfectivo"
        },
        {
          tipo: "VIAJE",
          fecha: "17/05/2022",
          hora: "11:31 AM",
          monto: "1.50",
          clase: "restEfectivo"
        },
        {
          tipo: "RECARGA",
          fecha: "16/05/2022",
          hora: "10:41 AM",
          monto: "8.00",
          clase: "plusEfectivo"
        },
        {
          tipo: "RECARGA",
          fecha: "15/05/2022",
          hora: "12:31 PM",
          monto: "5.00",
          clase: "plusEfectivo"
        },
        {
          tipo: "VIAJE",
          fecha: "14/05/2022",
          hora: "14:27 PM",
          monto: "1.50",
          clase: "restEfectivo"
        }
      ]
    },
    {
      id: 2,
      clase: "tarjeta_alternativa",
      tipo: "ALTERNATIVO",
      saldo: 10.50,
      propietario: "Josue Robles",
      movimientos: [
        {
          tipo: "RECARGA",
          fecha: "20/05/2022",
          hora: "12:41 PM",
          monto: "8.00",
          clase: "plusEfectivo"
        },
        {
          tipo: "VIAJE",
          fecha: "17/05/2022",
          hora: "17:34 PM",
          monto: "1.50",
          clase: "restEfectivo"
        }
      ]
    },
  ]

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
  }

  async recargar(tarjeta) {
    const modal = await this.modalCtrl.create({
      component: ModalTarjetaPage,
      componentProps: {
        id: tarjeta.id,
        saldo: tarjeta.saldo
      }
    });

    await modal.present();

    const { data: { montoAgregado, nuevoSaldo }, role } = await modal.onDidDismiss();

    if (role == 'recargaRealizada') {
      const index = this.tarjetasMonto.findIndex(i => i.id === tarjeta.id);
      this.tarjetasMonto[index].saldo = nuevoSaldo;

      this.tarjetasMonto[index].movimientos.push({
        tipo: "RECARGA",
        fecha: this.datePipe.transform(Date.now(), 'dd/MM/yyyy').toString(),
        hora: this.datePipe.transform(Date.now(), 'h:mm a').toString(),
        monto: montoAgregado.toString(),
        clase: "plusEfectivo"
      });

      const alert = await this.alertCtrl.create({
        header: 'Success',
        message: 'Recarga realizada exitosamente',
        buttons: ['Finalizar']
      });

      await alert.present();
    }
  }

}
