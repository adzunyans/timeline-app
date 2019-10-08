import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth
  ) { }

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean> {
    return this.afAuth.authState.pipe(
      take(1),
      map((loginUser: firebase.User) => {
        if (!!loginUser && !!loginUser.email && loginUser.email.length > 0) {
          return true;
        }

        this.router.navigateByUrl('/auth/signup', { skipLocationChange: true });

        return false;
      })
    );
  }
}
