import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsPage } from './clients.page';

const routes: Routes = [
  {
    path: '',
    component: ClientsPage
  },
  {
    path: 'ajouter-un-client',
    loadChildren: () => import('./ajouter-un-client/ajouter-un-client.module').then( m => m.AjouterUnClientPageModule)
  },
  {
    path: 'lister-les-clients',
    loadChildren: () => import('./lister-les-clients/lister-les-clients.module').then( m => m.ListerLesClientsPageModule)
  },
  {
    path: 'entreprises',
    loadChildren: () => import('./entreprises/entreprises.module').then( m => m.EntreprisesPageModule)
  },
  {
    path: 'groupes',
    loadChildren: () => import('./groupes/groupes.module').then( m => m.GroupesPageModule)
  },
  {
    path: 'fichier',
    loadChildren: () => import('./fichier/fichier.module').then( m => m.FichierPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsPageRoutingModule {}
