import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NursingItemsPage } from './nursing-items.page';

const routes: Routes = [
  {
    path: '',
    component: NursingItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NursingItemsPageRoutingModule {}
