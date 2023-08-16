import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrosImportadosPage } from './carros-importados.page';

const routes: Routes = [
  {
    path: '',
    component: CarrosImportadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrosImportadosPageRoutingModule {}
