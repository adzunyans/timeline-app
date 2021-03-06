import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  errorMessage: string;
  createForm: FormGroup = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.min(6)],
  })
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private afAuth: AngularFireAuth) {
    this.errorMessage = "";
  }

  ngOnInit() {
  }

  get email() {
    return this.createForm.get('email');
  }

  get password() {
    return this.createForm.get('password');
  }

  submit() {
    if (this.createForm.valid) {
      this.afAuth.auth.createUserWithEmailAndPassword(this.createForm.get('email').value, this.createForm.get('password').value)
        .then(() => {
          this.router.navigateByUrl('/auth/signin', { skipLocationChange: true });
        }).catch(error => {
          console.log(`${error.code} , ${error.message}`);
          this.errorMessage = error.message;
        });
    }
  }
}
