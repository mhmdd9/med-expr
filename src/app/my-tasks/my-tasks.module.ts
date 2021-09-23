import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyTasksPageRoutingModule } from './my-tasks-routing.module';

import { MyTasksPage } from './my-tasks.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    MyTasksPageRoutingModule
  ],
  declarations: [MyTasksPage]
})
export class MyTasksPageModule {}
