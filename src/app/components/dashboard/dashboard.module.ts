import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PublicRavesComponent } from '../public-raves/public-raves.component';
import { RaveComponent } from '../rave/rave.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { RaveStageComponent } from '../rave-stage/rave-stage.component';
import { UserBioComponent } from '@component/user-bio/user-bio.component';
import { HeaderComponent } from '@component/layouts/header/header.component';
import { NotFoundComponent } from '@component/not-found/not-found.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PublicRavesComponent,
    RaveComponent,
    UserProfileComponent,
    RaveStageComponent,
    UserBioComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule { }
