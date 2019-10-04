import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '@service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-bio',
  templateUrl: './user-bio.component.html',
  styleUrls: ['./user-bio.component.scss']
})
export class UserBioComponent implements OnInit, OnDestroy {
  userForm: FormGroup = this.fb.group({
    id: ["", Validators.min(1)],
    name: [""],
    desc: [""],
  })
  sub: Subscription;


  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.sub = this.userService.get().subscribe(user => {
      this.userForm.setValue({
        id: [user.userId],
        name: [user.userName],
        desc: [user.desc],
      })
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  get name() { return this.userForm.get('name'); }
  get id() { return this.userForm.get('id'); }



  toggleEdit() {
    console.log("edit");
  }
}
