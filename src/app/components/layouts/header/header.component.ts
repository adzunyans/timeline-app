import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '@model/user';
import { UserService } from '@service/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: User;
  homeImgSrc: string;
  subscription: Subscription;

  constructor(private userService: UserService) {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    this.subscription = this.userService.get().subscribe(user => this.user = user);
    this.homeImgSrc = "assets/home.png";
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
