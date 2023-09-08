import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RessourcesHumainPage } from './ressources-humain.page';

const routes: Routes = [
  {
    path: '',
    component: RessourcesHumainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RessourcesHumainPageRoutingModule {}
