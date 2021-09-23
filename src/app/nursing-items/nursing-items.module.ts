import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NursingItemsPageRoutingModule } from './nursing-items-routing.module';

import { NursingItemsPage } from './nursing-items.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    NursingItemsPageRoutingModule
  ],
  declarations: [NursingItemsPage]
})
export class NursingItemsPageModule {}
