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
      saldo: 15.00
    },
    {
      id: 2,
      clase: "tarjeta_alternativa",
      tipo: "ALTERNATIVO",
      saldo: 10.50
    },
  ]

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
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

    const { data: nuevoSaldo, role } = await modal.onDidDismiss();

    if (role == 'recargaRealizada') {
      const index = this.tarjetasMonto.findIndex(i => i.id === tarjeta.id);
      this.tarjetasMonto[index].saldo = nuevoSaldo;

      const alert = await this.alertCtrl.create({
        header: 'Success',
        message: 'Recarga realizada exitosamente',
        buttons: ['Finalizar']
      })

      await alert.present();
    }
  }

}
