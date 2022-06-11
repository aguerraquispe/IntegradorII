import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarjetasPage } from './tarjetas.page';

const routes: Routes = [
  {
    path: '',
    component: TarjetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarjetasPageRoutingModule {}
