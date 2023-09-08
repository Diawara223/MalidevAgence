import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutilsPage } from './outils.page';

const routes: Routes = [
  {
    path: '',
    component: OutilsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutilsPageRoutingModule {}
