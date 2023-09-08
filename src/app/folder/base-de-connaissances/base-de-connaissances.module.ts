import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaseDeConnaissancesPageRoutingModule } from './base-de-connaissances-routing.module';

import { BaseDeConnaissancesPage } from './base-de-connaissances.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaseDeConnaissancesPageRoutingModule
  ],
  declarations: [BaseDeConnaissancesPage]
})
export class BaseDeConnaissancesPageModule {}
