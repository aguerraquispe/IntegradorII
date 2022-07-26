import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalHorarioPage } from './modal-horario.page';

const routes: Routes = [
  {
    path: '',
    component: ModalHorarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalHorarioPageRoutingModule {}
