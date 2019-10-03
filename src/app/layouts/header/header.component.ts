import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user';
import { UserService } from 'src/app/services/user.service';

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
