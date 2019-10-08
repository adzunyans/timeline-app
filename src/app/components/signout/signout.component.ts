import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class SignoutComponent implements OnInit {

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth) {
  }
  ngOnInit() {
    this.afAuth.auth.signOut().then(() => {
      console.log("サインアウト成功");
      this.router.navigateByUrl('/', { skipLocationChange: false });
    }).catch((error) => {
      console.log(`サインアウト失敗, ${error}`);
      this.router.navigateByUrl('/', { skipLocationChange: false });
    });

    // .signInWithEmailAndPassword(this.signinForm.get('email').value, this.signinForm.get('password').value)
    // .then(() => {
    //   console.log("ログイン成功");
    //   this.router.navigateByUrl('/', { skipLocationChange: false });
    // }).catch(error => {
    //   console.log(`${error.code} , ${error.message}`);
    //   this.errorMessage = error.message;
    // });
  }

}
