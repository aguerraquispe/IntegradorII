import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalHorarioPageRoutingModule } from './modal-horario-routing.module';

import { ModalHorarioPage } from './modal-horario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalHorarioPageRoutingModule
  ],
  declarations: [ModalHorarioPage]
})
export class ModalHorarioPageModule {}
