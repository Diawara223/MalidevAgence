import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContratsPage } from './contrats.page';

const routes: Routes = [
  {
    path: '',
    component: ContratsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratsPageRoutingModule {}
