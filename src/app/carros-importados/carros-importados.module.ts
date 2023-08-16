import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrosImportadosPageRoutingModule } from './carros-importados-routing.module';

import { CarrosImportadosPage } from './carros-importados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrosImportadosPageRoutingModule
  ],
  declarations: [CarrosImportadosPage]
})
export class CarrosImportadosPageModule {}
