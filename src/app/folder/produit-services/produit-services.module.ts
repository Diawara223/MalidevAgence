import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitServicesPageRoutingModule } from './produit-services-routing.module';

import { ProduitServicesPage } from './produit-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitServicesPageRoutingModule
  ],
  declarations: [ProduitServicesPage]
})
export class ProduitServicesPageModule {}
