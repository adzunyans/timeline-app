import { Component, OnInit, Input } from '@angular/core';

import { Rave } from './rave';
@Component({
  selector: 'app-rave',
  templateUrl: './rave.component.html',
  styleUrls: ['./rave.component.scss']
})
export class RaveComponent implements OnInit {

  @Input() rave: Rave;

  constructor() { }

  ngOnInit() {
  }

}
