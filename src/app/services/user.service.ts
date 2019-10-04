import { Injectable } from '@angular/core';
import { User } from '@model/user';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = {
    userId: 1,
    userName: "azumi"
  }

  constructor() { }

  get(): Observable<User> {
    return of(this.user);
  }
}
