import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouvelleDepensePageRoutingModule } from './nouvelle-depense-routing.module';

import { NouvelleDepensePage } from './nouvelle-depense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouvelleDepensePageRoutingModule
  ],
  declarations: [NouvelleDepensePage]
})
export class NouvelleDepensePageModule {}
