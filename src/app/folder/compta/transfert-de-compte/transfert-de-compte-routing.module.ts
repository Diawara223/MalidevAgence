import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransfertDeComptePage } from './transfert-de-compte.page';

const routes: Routes = [
  {
    path: '',
    component: TransfertDeComptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransfertDeComptePageRoutingModule {}
