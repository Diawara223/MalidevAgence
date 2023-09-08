import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouveauVirementPageRoutingModule } from './nouveau-virement-routing.module';

import { NouveauVirementPage } from './nouveau-virement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouveauVirementPageRoutingModule
  ],
  declarations: [NouveauVirementPage]
})
export class NouveauVirementPageModule {}
