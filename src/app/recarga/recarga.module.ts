import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecargaPageRoutingModule } from './recarga-routing.module';

import { RecargaPage } from './recarga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecargaPageRoutingModule
  ],
  declarations: [RecargaPage]
})
export class RecargaPageModule {}
