import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransfertDeComptePageRoutingModule } from './transfert-de-compte-routing.module';

import { TransfertDeComptePage } from './transfert-de-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransfertDeComptePageRoutingModule
  ],
  declarations: [TransfertDeComptePage]
})
export class TransfertDeComptePageModule {}
