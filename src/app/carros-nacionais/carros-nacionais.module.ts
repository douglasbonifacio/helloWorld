import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrosNacionaisPageRoutingModule } from './carros-nacionais-routing.module';

import { CarrosNacionaisPage } from './carros-nacionais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrosNacionaisPageRoutingModule
  ],
  declarations: [CarrosNacionaisPage]
})
export class CarrosNacionaisPageModule {}
