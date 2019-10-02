import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PublicRavesComponent } from '../public-raves/public-raves.component';
import { HeaderComponent } from '../layouts/header/header.component';
import { RaveComponent } from '../rave/rave.component';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PublicRavesComponent,
    HeaderComponent,
    RaveComponent,
    UserComponent,
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
  ],
})
export class DashboardModule { }
