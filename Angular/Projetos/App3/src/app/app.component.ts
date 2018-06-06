import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Instagram Clone';

  ngOnInit(): void {

    var config = {
      apiKey: "AIzaSyAwM9xOZQGI-1HV4wQRErHrLIN5IBY-Y-U",
      authDomain: "instagram-clone-3b09c.firebaseapp.com",
      databaseURL: "https://instagram-clone-3b09c.firebaseio.com",
      projectId: "instagram-clone-3b09c",
      storageBucket: "instagram-clone-3b09c.appspot.com",
      messagingSenderId: "1087117859434"
    };

    firebase.initializeApp(config)
  }
}
