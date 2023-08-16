import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrosNacionaisPage } from './carros-nacionais.page';

const routes: Routes = [
  {
    path: '',
    component: CarrosNacionaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrosNacionaisPageRoutingModule {}
