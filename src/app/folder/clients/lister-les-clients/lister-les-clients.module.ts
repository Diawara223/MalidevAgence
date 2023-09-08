import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListerLesClientsPageRoutingModule } from './lister-les-clients-routing.module';

import { ListerLesClientsPage } from './lister-les-clients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListerLesClientsPageRoutingModule
  ],
  declarations: [ListerLesClientsPage]
})
export class ListerLesClientsPageModule {}
