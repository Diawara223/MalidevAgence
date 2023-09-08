import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NouveauVirementPage } from './nouveau-virement.page';

const routes: Routes = [
  {
    path: '',
    component: NouveauVirementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouveauVirementPageRoutingModule {}
