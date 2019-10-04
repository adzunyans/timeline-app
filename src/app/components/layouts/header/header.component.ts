import { Component, OnInit } from '@angular/core';
import { User } from '@model/user';
import { UserService } from '@service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;
  homeImgSrc: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.get().subscribe(user => {
      this.user = user;
    })
    this.homeImgSrc = "assets/home.png";
  }

}
