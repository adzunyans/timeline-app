import { Injectable } from '@angular/core';

import { Rave } from '@model/rave';
import { User } from '@model/user';

import { Observable, of, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

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

  findByUserId(user: User): Observable<Rave[]> {
    return of(this.raves).pipe(
      map((rave: Rave[]) => rave.filter(v => v.userId === user.userId)));
  }

  get(id: number): Observable<Rave> {
    return of(this.raves[id - 1]);
  }

  add(rave: Rave): void {
    this.raves.push(rave);
  }
}
