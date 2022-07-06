import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorarioLinea1PageRoutingModule } from './horario-linea1-routing.module';

import { HorarioLinea1Page } from './horario-linea1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorarioLinea1PageRoutingModule
  ],
  declarations: [HorarioLinea1Page]
})
export class HorarioLinea1PageModule {}
