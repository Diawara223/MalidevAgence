import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SMSPageRoutingModule } from './sms-routing.module';

import { SMSPage } from './sms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SMSPageRoutingModule
  ],
  declarations: [SMSPage]
})
export class SMSPageModule {}
