import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicRavesComponent } from './public-raves/public-raves.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    "path": "",
    "component": DashboardComponent
  },
  {
    "path": "user/:id",
    "component": UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
