import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitServicesPage } from './produit-services.page';

const routes: Routes = [
  {
    path: '',
    component: ProduitServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduitServicesPageRoutingModule {}
