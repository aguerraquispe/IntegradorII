import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'tarjetas',
        loadChildren: () => import('../../tarjetas/tarjetas.module').then(m => m.TarjetasPageModule)
      },
      {
        path: 'rutas',
        loadChildren: () => import('../../rutas/rutas.module').then(m => m.RutasPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
