import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotosHarleyPage } from './motos-harley.page';

const routes: Routes = [
  {
    path: '',
    component: MotosHarleyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotosHarleyPageRoutingModule {}
