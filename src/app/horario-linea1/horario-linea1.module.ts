import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorarioLinea1PageRoutingModule } from './horario-linea1-routing.module';

import { HorarioLinea1Page } from './horario-linea1.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    HorarioLinea1PageRoutingModule
  ],
  declarations: [HorarioLinea1Page]
})
export class HorarioLinea1PageModule { }
