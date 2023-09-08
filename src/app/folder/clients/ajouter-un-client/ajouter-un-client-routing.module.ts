import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterUnClientPage } from './ajouter-un-client.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterUnClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterUnClientPageRoutingModule {}
