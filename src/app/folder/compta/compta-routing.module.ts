import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComptaPage } from './compta.page';

const routes: Routes = [
  {
    path: '',
    component: ComptaPage
  },
  {
    path: 'nouveau-virement',
    loadChildren: () => import('./nouveau-virement/nouveau-virement.module').then( m => m.NouveauVirementPageModule)
  },
  {
    path: 'nouvelle-depense',
    loadChildren: () => import('./nouvelle-depense/nouvelle-depense.module').then( m => m.NouvelleDepensePageModule)
  },
  {
    path: 'transfert-de-compte',
    loadChildren: () => import('./transfert-de-compte/transfert-de-compte.module').then( m => m.TransfertDeComptePageModule)
  },
  {
    path: 'factures',
    loadChildren: () => import('./factures/factures.module').then( m => m.FacturesPageModule)
  },
  {
    path: 'voir-les-transactions',
    loadChildren: () => import('./voir-les-transactions/voir-les-transactions.module').then( m => m.VoirLesTransactionsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComptaPageRoutingModule {}
