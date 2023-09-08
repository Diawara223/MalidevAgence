import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichierPageRoutingModule } from './fichier-routing.module';

import { FichierPage } from './fichier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichierPageRoutingModule
  ],
  declarations: [FichierPage]
})
export class FichierPageModule {}
