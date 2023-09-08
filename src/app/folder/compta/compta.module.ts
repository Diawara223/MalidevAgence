import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComptaPageRoutingModule } from './compta-routing.module';

import { ComptaPage } from './compta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComptaPageRoutingModule
  ],
  declarations: [ComptaPage]
})
export class ComptaPageModule {}
