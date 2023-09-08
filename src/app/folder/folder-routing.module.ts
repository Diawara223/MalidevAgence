import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then( m => m.ClientsPageModule)
  },
  {
    path: 'compta',
    loadChildren: () => import('./compta/compta.module').then( m => m.ComptaPageModule)
  },
  {
    path: 'facturation',
    loadChildren: () => import('./facturation/facturation.module').then( m => m.FacturationPageModule)
  },
  {
    path: 'fournisseurs',
    loadChildren: () => import('./fournisseurs/fournisseurs.module').then( m => m.FournisseursPageModule)
  },
  {
    path: 'contrats',
    loadChildren: () => import('./contrats/contrats.module').then( m => m.ContratsPageModule)
  },
  {
    path: 'projets',
    loadChildren: () => import('./projets/projets.module').then( m => m.ProjetsPageModule)
  },
  {
    path: 'prospects',
    loadChildren: () => import('./prospects/prospects.module').then( m => m.ProspectsPageModule)
  },
  {
    path: 'sms',
    loadChildren: () => import('./sms/sms.module').then( m => m.SMSPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'base-de-connaissances',
    loadChildren: () => import('./base-de-connaissances/base-de-connaissances.module').then( m => m.BaseDeConnaissancesPageModule)
  },
  {
    path: 'commandes',
    loadChildren: () => import('./commandes/commandes.module').then( m => m.CommandesPageModule)
  },
  {
    path: 'achat',
    loadChildren: () => import('./achat/achat.module').then( m => m.AchatPageModule)
  },
  {
    path: 'ressources-humain',
    loadChildren: () => import('./ressources-humain/ressources-humain.module').then( m => m.RessourcesHumainPageModule)
  },
  {
    path: 'documents',
    loadChildren: () => import('./documents/documents.module').then( m => m.DocumentsPageModule)
  },
  {
    path: 'commande',
    loadChildren: () => import('./commande/commande.module').then( m => m.CommandePageModule)
  },
  {
    path: 'taches',
    loadChildren: () => import('./taches/taches.module').then( m => m.TachesPageModule)
  },
  {
    path: 'outils',
    loadChildren: () => import('./outils/outils.module').then( m => m.OutilsPageModule)
  },
  {
    path: 'calendrier',
    loadChildren: () => import('./calendrier/calendrier.module').then( m => m.CalendrierPageModule)
  },
  {
    path: 'produit-services',
    loadChildren: () => import('./produit-services/produit-services.module').then( m => m.ProduitServicesPageModule)
  },
  {
    path: 'rapport',
    loadChildren: () => import('./rapport/rapport.module').then( m => m.RapportPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
