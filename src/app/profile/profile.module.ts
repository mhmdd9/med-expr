import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";

import { IonicModule } from "@ionic/angular";

import { ProfilePageRoutingModule } from "./profile-routing.module";

import { ProfilePage } from "./profile.page";
import { ContactInfoComponent } from "./components/contact-info/contact-info.component";
import { SpecInfoComponent } from "./components/spec-info/spec-info.component";
import { EducInfoComponent } from "./components/educ-info/educ-info.component";
import { WorkResumeComponent } from "./components/work-resume/work-resume.component";
import { IonicSelectableModule } from "ionic-selectable";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ProfilePageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [
    ProfilePage,
    ContactInfoComponent,
    SpecInfoComponent,
    EducInfoComponent,
    WorkResumeComponent,
  ],
})
export class ProfilePageModule {}
