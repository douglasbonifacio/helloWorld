import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotosHarleyPageRoutingModule } from './motos-harley-routing.module';

import { MotosHarleyPage } from './motos-harley.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotosHarleyPageRoutingModule
  ],
  declarations: [MotosHarleyPage]
})
export class MotosHarleyPageModule {}
