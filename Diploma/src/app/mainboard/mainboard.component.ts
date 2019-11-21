import { Component, OnInit } from '@angular/core';
import { AuthService, UserService } from '../core';
import { User, Task } from '../shared/models/user';
import * as _ from 'lodash';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material';
import { AddBoardComponent } from './modals/add-board/add-board.component';
import { EditBoardComponent } from './modals/edit-board/edit-board.component';
import * as uuid from 'uuid';
import { filter } from 'rxjs/operators';
import { AddTaskComponent } from './modals/add-task/add-task.component';



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
    if (this.user.boards === undefined) {
      this.user.boards = [];
    }
    const dialogRef = this.dialog.open(AddBoardComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(JSON.stringify(result.newBoardName));
      this.user.boards.push({id: uuid.v4(), boardName: result.newBoardName, description: result.newBoardDescription, tasks: []});
      this.userService.updateUser(this.user);
    });
  }

  openAddTaskDialog(boardId) {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '300px',
    });

    const boardIndex = this.user.boards.findIndex(item => item.id === boardId);
    console.log(this.user.boards[boardIndex].tasks);

    dialogRef.afterClosed().subscribe(result => {
      this.user.boards[boardIndex].tasks.push({
        id: uuid.v4(),
        header: result.newTaskName,
        description: result.newTaskDescription
      });
      this.userService.updateUser(this.user);
    });
  }
  deleteBoard(id) {
    this.user.boards.splice(this.user.boards.findIndex(item => item.id === id), 1);
    this.userService.updateUser(this.user);
  }

  deleteTask(boardId, taskId) {

  }

  editBoard(id) {
    const editableBoardId = this.user.boards.findIndex(item => item.id === id);
    const editableBoard = this.user.boards[editableBoardId];
    const dialogRef = this.dialog.open(EditBoardComponent, {
      width: '250px',
      data: {
        oldBoardName: editableBoard.boardName,
        oldBoardDescription: editableBoard.description
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.user.boards[editableBoardId].boardName = result.newBoardName;
      this.user.boards[editableBoardId].description = result.newBoardDescription;

      this.userService.updateUser(this.user);
    });
  }

  editTask(boardId, taskId) {

  }
  // createBoard() {
  //   this.user.boards = {
  //         Todo: [
  //           {
  //             id: '99999',
  //             header: 'TODO'
  //           },
  //           {
  //             id: '99999',
  //             header: 'lil'
  //           }
  //         ],
  //         InProgress: [
  //           {
  //             id: '99999',
  //             header: 'InPROGREEs'
  //           }
  //         ],
  //         Done: [
  //           {
  //             id: '99999',
  //             header: 'DONe!!!'
  //           }
  //         ]
  //   };
  //   this.userService.updateUser(this.user);
  //   // console.log(this.user)
  // }
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
