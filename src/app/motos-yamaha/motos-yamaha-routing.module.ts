import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotosYamahaPage } from './motos-yamaha.page';

const routes: Routes = [
  {
    path: '',
    component: MotosYamahaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotosYamahaPageRoutingModule {}
