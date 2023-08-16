import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotosYamahaPageRoutingModule } from './motos-yamaha-routing.module';

import { MotosYamahaPage } from './motos-yamaha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotosYamahaPageRoutingModule
  ],
  declarations: [MotosYamahaPage]
})
export class MotosYamahaPageModule {}
