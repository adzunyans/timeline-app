import { Component, OnInit } from '@angular/core';
import { User } from '@model/user';
import { UserService } from '@service/user.service';
import { Rave } from '@model/rave';
import { RaveService } from '@service/rave.service';
import { FormControl, ControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {

  user$: Observable<User>;
  raves$: Observable<Rave[]>;

  userName = new FormControl("");

  constructor(
    private userService: UserService,
    private raveService: RaveService
  ) { }


  ngOnInit() {
    this.user$ = this.userService.get();
    this.raves$ = this.userService.get().pipe(
      concatMap(user => this.raveService.findByUserId(user))
    );
  }

  toggleEdit() {
    console.log("edit");
  }
}
