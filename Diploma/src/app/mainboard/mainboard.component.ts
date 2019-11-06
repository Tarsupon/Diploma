import { Component, OnInit } from '@angular/core';
import { AuthService, UserService } from '../core';
import { User, Task } from '../shared/models/user';
import * as _ from 'lodash';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material';
import { AddBoardComponent } from './add-board/add-board.component';


@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.scss']
})
export class MainboardComponent implements OnInit {

  public authUser: firebase.UserInfo;
  public user: User;
  constructor(
    public auth: AuthService,
    public userService: UserService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.auth.getLoggedInUser().pipe().subscribe(user => {
        this.authUser = user;
      });

    this.userService.getUser().pipe().subscribe(user => {
        this.user = _.cloneDeep(user);
      });
  }

  openAddBoardDialog(): void {
    const dialogRef = this.dialog.open(AddBoardComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.user.boards[result] = [];
      this.userService.updateUser(this.user);
    });
  }

  createBoard() {
    this.user.boards = {
          Todo: [
            {
              id: '99999',
              header: 'TODO'
            },
            {
              id: '99999',
              header: 'lil'
            }
          ],
          InProgress: [
            {
              id: '99999',
              header: 'InPROGREEs'
            }
          ],
          Done: [
            {
              id: '99999',
              header: 'DONe!!!'
            }
          ]
    };
    this.userService.updateUser(this.user);
    // console.log(this.user)
  }
  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.userService.updateUser(this.user);
  }

}
