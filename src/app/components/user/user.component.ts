import { Component, OnInit } from '@angular/core';
import { User } from '@model/user';
import { UserService } from '@service/user.service';
import { Rave } from '@model/rave';
import { RaveService } from '@service/rave.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;
  raves: Rave[];

  constructor(
    private userService: UserService,
    private raveService: RaveService
  ) {
    this.raves = [];
  }

  ngOnInit() {
    this.userService.get().subscribe(user => {
      this.user = user;
    });

    this.raveService.findByUserId(this.user).subscribe((rave: Rave) => {
      this.raves.push(rave);
    })
  }

}
