import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoirLesTransactionsPage } from './voir-les-transactions.page';

const routes: Routes = [
  {
    path: '',
    component: VoirLesTransactionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoirLesTransactionsPageRoutingModule {}
