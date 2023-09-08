import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterUnClientPageRoutingModule } from './ajouter-un-client-routing.module';

import { AjouterUnClientPage } from './ajouter-un-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterUnClientPageRoutingModule
  ],
  declarations: [AjouterUnClientPage]
})
export class AjouterUnClientPageModule {}
