import { Injectable } from '@angular/core';

import { Rave } from '../rave/rave';
import { User } from '../user/user';

import { Observable, of, from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RaveService {

  raves: Rave[] = [
    new Rave(1, 1, "testtest"),
    new Rave(2, 2, "testtest"),
    new Rave(3, 2, "testtest"),
    new Rave(4, 1, "testtest"),
    new Rave(5, 2, "testtest"),
    new Rave(6, 1, "testtest"),
    new Rave(7, 1, "testtest"),
    new Rave(8, 2, "testtest"),
    new Rave(9, 2, "testtest"),
    new Rave(10, 1, "testtest"),
    new Rave(11, 2, "testtest"),
    new Rave(12, 1, "testtest"),
  ];

  constructor() { }

  list(): Observable<Rave[]> {
    return of(this.raves);
  }

  findByUserId(user: User) {
    return from(this.raves).pipe(
      filter((rave: Rave) => rave.userId === user.userId));
  }

  get(id: number): Observable<Rave> {
    return of(this.raves[id - 1]);
  }
}
