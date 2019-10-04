import { Component, OnInit } from '@angular/core';
import { UserService } from '@service/user.service';
import { Rave } from '@model/rave';
import { RaveService } from '@service/rave.service';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {

  raves$: Observable<Rave[]>;

  constructor(
    private userService: UserService,
    private raveService: RaveService
  ) { }

  ngOnInit() {
    this.raves$ = this.userService.get().pipe(
      concatMap(user => this.raveService.findByUserId(user))
    );
  }
}
