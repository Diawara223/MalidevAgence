import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseDeConnaissancesPage } from './base-de-connaissances.page';

const routes: Routes = [
  {
    path: '',
    component: BaseDeConnaissancesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseDeConnaissancesPageRoutingModule {}
