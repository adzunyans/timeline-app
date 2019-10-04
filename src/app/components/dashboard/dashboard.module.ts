import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PublicRavesComponent } from '../public-raves/public-raves.component';
import { HeaderComponent } from '../layouts/header/header.component';
import { RaveComponent } from '../rave/rave.component';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { RaveStageComponent } from '../rave-stage/rave-stage.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PublicRavesComponent,
    HeaderComponent,
    RaveComponent,
    UserProfileComponent,
    RaveStageComponent,
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    FormsModule,
  ],
})
export class DashboardModule { }
