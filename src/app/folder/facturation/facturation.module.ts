import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacturationPageRoutingModule } from './facturation-routing.module';

import { FacturationPage } from './facturation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacturationPageRoutingModule
  ],
  declarations: [FacturationPage]
})
export class FacturationPageModule {}
