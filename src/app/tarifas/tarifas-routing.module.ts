import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarifasPage } from './tarifas.page';

const routes: Routes = [
  {
    path: '',
    component: TarifasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarifasPageRoutingModule {}
