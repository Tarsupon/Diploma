import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  myuser: firebase.User;

  constructor(public authent: AuthService) { }

  ngOnInit() {
  }

}
