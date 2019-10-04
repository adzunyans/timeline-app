import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicRavesComponent } from '../public-raves/public-raves.component';
import { UserComponent } from '../user/user.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: "public",
        component: PublicRavesComponent,
      },
      {
        path: "user/:id",
        component: UserComponent,
      },
      {
        path: "",
        component: PublicRavesComponent,
        pathMatch: "full",
      },
      {
        path: "**",
        component: PublicRavesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
