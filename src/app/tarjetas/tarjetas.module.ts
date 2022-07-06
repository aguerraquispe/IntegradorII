import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarjetasPageRoutingModule } from './tarjetas-routing.module';

import { TarjetasPage } from './tarjetas.page';
import { ModalTarjetaPage } from '../modal-tarjeta/modal-tarjeta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TarjetasPageRoutingModule
  ],
  declarations: [TarjetasPage, ModalTarjetaPage],
  entryComponents : [ModalTarjetaPage]
})
export class TarjetasPageModule {}
