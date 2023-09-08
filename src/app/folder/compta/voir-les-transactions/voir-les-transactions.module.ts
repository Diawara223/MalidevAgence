import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoirLesTransactionsPageRoutingModule } from './voir-les-transactions-routing.module';

import { VoirLesTransactionsPage } from './voir-les-transactions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoirLesTransactionsPageRoutingModule
  ],
  declarations: [VoirLesTransactionsPage]
})
export class VoirLesTransactionsPageModule {}
