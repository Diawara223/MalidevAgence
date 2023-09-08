import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NouvelleDepensePage } from './nouvelle-depense.page';

const routes: Routes = [
  {
    path: '',
    component: NouvelleDepensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouvelleDepensePageRoutingModule {}
