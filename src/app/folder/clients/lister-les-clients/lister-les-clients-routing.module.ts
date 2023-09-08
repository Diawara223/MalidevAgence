import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListerLesClientsPage } from './lister-les-clients.page';

const routes: Routes = [
  {
    path: '',
    component: ListerLesClientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListerLesClientsPageRoutingModule {}
