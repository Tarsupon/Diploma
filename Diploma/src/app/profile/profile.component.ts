import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { User } from '../core/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  myuser: firebase.User;

  constructor(public authent: AuthService) { }

  ngOnInit() {
    this.authent.getLoggedInUser().subscribe(
      user => {
        console.log(user);
        this.myuser = Object.assign(user);
      }
    );
    console.log(this.myuser);
  }

}
