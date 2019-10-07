import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '@service/firebase.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    const firebase = new FirebaseService();
    // firebase.setUser();
    firebase.getAllData();
  }

}
