import { Component, OnInit } from '@angular/core';
import { Rave } from '../rave/rave';
import { RaveService } from '../services/rave.service';

@Component({
  selector: 'app-public-raves',
  templateUrl: './public-raves.component.html',
  styleUrls: ['./public-raves.component.scss']
})
export class PublicRavesComponent implements OnInit {

  raves: Rave[];
  constructor(private raveService: RaveService) { }

  ngOnInit() {
    this.raveService.list().subscribe((raves: Rave[]) => {
      this.raves = raves;
    });
  }

}
