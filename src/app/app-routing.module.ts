import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@guard/auth.guard';
import { SignupComponent } from '@component/signup/signup.component';
import { AuthComponent } from '@component/auth/auth.component';
import { SigninComponent } from '@component/signin/signin.component';
import { SignoutComponent } from '@component/signout/signout.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: "signup",
        component: SignupComponent
      },
      {
        path: "signin",
        component: SigninComponent
      },
      {
        path: "signout",
        component: SignoutComponent
      },
    ],
  },
  {
    path: '',
    loadChildren: () => import("./components/dashboard/dashboard.module").then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
