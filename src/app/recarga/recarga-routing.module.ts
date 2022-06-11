import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecargaPage } from './recarga.page';

const routes: Routes = [
  {
    path: '',
    component: RecargaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecargaPageRoutingModule {}
