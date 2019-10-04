import { Component, OnInit } from '@angular/core';
import { RaveService } from '@service/rave.service';
import { User } from '@model/user';
import { UserService } from '@service/user.service';
import { Rave } from '@model/rave';

@Component({
  selector: 'app-rave-stage',
  templateUrl: './rave-stage.component.html',
  styleUrls: ['./rave-stage.component.scss']
})
export class RaveStageComponent implements OnInit {
  rave: Rave;
  user: User;

  constructor(
    private raveService: RaveService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.get().subscribe(user => {
      this.rave = new Rave(999, user.userId, "");
    });
  }

  post(): void {
    // this.raveService.add(this.rave);
    console.log(this.rave);
  }
}