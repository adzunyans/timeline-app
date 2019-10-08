import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  errorMessage: string;
  signinForm: FormGroup = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.min(6)],
  })
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private afAuth: AngularFireAuth) {
  }

  ngOnInit() {
  }

  get email() {
    return this.signinForm.get('email');
  }

  get password() {
    return this.signinForm.get('password');
  }

  submit() {
    if (this.signinForm.valid) {
      this.afAuth.auth.signInWithEmailAndPassword(this.signinForm.get('email').value, this.signinForm.get('password').value)
        .then(() => {
          console.log("ログイン成功");
          this.router.navigateByUrl('/', { skipLocationChange: false });
        }).catch(error => {
          console.log(`${error.code} , ${error.message}`);
          this.errorMessage = error.message;
        });
    }
  }
}
