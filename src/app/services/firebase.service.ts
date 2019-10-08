// import { Injectable } from '@angular/core';
// import * as firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// @Injectable({
//   providedIn: 'root'
// })
// export class FirebaseService {
//   db: firebase.firestore.Firestore;
//   static firebase;
//   constructor() { }

//   initFirebase() {
//     const firebaseConfig = {
//       apiKey: "AIzaSyC1oyGs9yQ6jHMGYFLkkNcYJqM38Sxp1Fk",
//       authDomain: "timeline-app-391fe.firebaseapp.com",
//       databaseURL: "https://timeline-app-391fe.firebaseio.com",
//       projectId: "timeline-app-391fe",
//       storageBucket: "timeline-app-391fe.appspot.com",
//       messagingSenderId: "35467543525",
//       appId: "1:35467543525:web:c9d8ad9aafaa37458b650c"
//     };
//     firebase.initializeApp(firebaseConfig);
//   }

//   connectDb() {
//     this.db = firebase.firestore();
//   }

//   setUser(): void {
//     let setUser = this.db.collection('user_core').doc("1").set({
//       userId: 1,
//       userName: 'azumi',
//       desc: 'testtest',
//     }).then(() => {
//       console.log("set user");
//     }).catch((error) => {
//       console.log(`error ( ${error} )`);
//     });
//   }

//   getAllData(): void {
//     this.db.collection('hoge').get().then(querySnapshot => {
//       querySnapshot.forEach(doc => {
//         console.log(`${doc.id} => ${doc.data()}`);
//       });
//     });
//   }

//   signUpUser(email: string, pw: string) {
//     return firebase.auth().createUserWithEmailAndPassword(email, pw);
//   }

//   auth(): any {
//     return firebase.auth().onAuthStateChanged;
//   }
// }
