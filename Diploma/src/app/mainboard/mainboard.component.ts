import { Component, OnInit } from '@angular/core';
import { AuthService, UserService } from '../core';
import { User } from '../shared/models/user';
import * as _ from 'lodash';


@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.scss']
})
export class MainboardComponent implements OnInit {

  public authUser: firebase.UserInfo;
  public user: User;

  constructor(public auth: AuthService, public userService: UserService) { }

  ngOnInit() {
    this.auth.getLoggedInUser().pipe().subscribe(user => {
        this.authUser = user;
      });

    this.userService.getUser().pipe().subscribe(user => {
        this.user = _.cloneDeep(user);
      });
  }
  createBoard() {
    this.user.boards = {
          // Todo: [
          //   {
          //     id: '99999',
          //     header: 'TODO'
          //   },
          //   {
          //     id: '99999',
          //     header: 'lil'
          //   }
          // ],
          // InProgress: [
          //   {
          //     id: '99999',
          //     header: 'InPROGREEs'
          //   }
          // ],
          // Done: [
          //   {
          //     id: '99999',
          //     header: 'DONe!!!'
          //   }
          // ]
    };
    this.userService.updateUser(this.user);
    // console.log(this.user)
  }

}
