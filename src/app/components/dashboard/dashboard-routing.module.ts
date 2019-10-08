import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicRavesComponent } from '../public-raves/public-raves.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { DashboardComponent } from './dashboard.component';
import { NotFoundComponent } from '@component/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: "user/:id",
        component: UserProfileComponent,
      },
      {
        path: "",
        component: PublicRavesComponent,
        pathMatch: "full",
      },
      {
        path: "**",
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
