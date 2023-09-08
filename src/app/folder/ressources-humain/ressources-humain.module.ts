import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RessourcesHumainPageRoutingModule } from './ressources-humain-routing.module';

import { RessourcesHumainPage } from './ressources-humain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RessourcesHumainPageRoutingModule
  ],
  declarations: [RessourcesHumainPage]
})
export class RessourcesHumainPageModule {}
