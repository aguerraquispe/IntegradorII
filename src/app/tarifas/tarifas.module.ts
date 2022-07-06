import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarifasPageRoutingModule } from './tarifas-routing.module';

import { TarifasPage } from './tarifas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarifasPageRoutingModule
  ],
  declarations: [TarifasPage]
})
export class TarifasPageModule {}
