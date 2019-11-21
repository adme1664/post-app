import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyDbGkR_IzfQSeSpw7EUSCRAgd7YSG2OhBU",
      authDomain: "posts-app-8ab7a.firebaseapp.com",
      databaseURL: "https://posts-app-8ab7a.firebaseio.com",
      projectId: "posts-app-8ab7a",
      storageBucket: "posts-app-8ab7a.appspot.com",
      messagingSenderId: "699826333811",
      appId: "1:699826333811:web:33b70cfbf9332e93e76206",
      measurementId: "G-7SSZWG3QR8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
