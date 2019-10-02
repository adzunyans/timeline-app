import { Injectable } from '@angular/core';
import { Rave } from '../rave/rave';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaveService {

  raves = [
    new Rave(1, "azumi", "testtest"),
    new Rave(2, "azumi", "testtest"),
    new Rave(3, "azumi", "testtest")
  ];

  constructor() { }

  list(): Observable<Rave[]> {
    return of(this.raves);
  }

  get(id: number): Observable<Rave> {
    return of(this.raves[id - 1]);
  }
}
