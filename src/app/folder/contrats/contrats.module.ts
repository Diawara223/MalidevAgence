import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContratsPageRoutingModule } from './contrats-routing.module';

import { ContratsPage } from './contrats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContratsPageRoutingModule
  ],
  declarations: [ContratsPage]
})
export class ContratsPageModule {}
