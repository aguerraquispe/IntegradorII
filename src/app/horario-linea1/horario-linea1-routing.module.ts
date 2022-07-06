import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorarioLinea1Page } from './horario-linea1.page';

const routes: Routes = [
  {
    path: '',
    component: HorarioLinea1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorarioLinea1PageRoutingModule {}
