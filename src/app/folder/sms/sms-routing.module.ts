import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SMSPage } from './sms.page';

const routes: Routes = [
  {
    path: '',
    component: SMSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SMSPageRoutingModule {}
