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
import { TranslateService } from '@ngx-translate/core';
import { EditTaskComponent } from './modals/edit-task/edit-task.component';



@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.scss']
})
export class MainboardComponent implements OnInit {

  public authUser: firebase.UserInfo;
  public user: User = new User();
  constructor(
    private translate: TranslateService,
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
    const deletableBoardId = this.user.boards.findIndex(item => item.id === boardId);
    this.user.boards[deletableBoardId].tasks.splice(this.user.boards[deletableBoardId].tasks.findIndex(task => task.id === taskId), 1);
    this.userService.updateUser(this.user);
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
    const editableBoardId = this.user.boards.findIndex(item => item.id === boardId);
    const editableTaskId = this.user.boards[editableBoardId].tasks.findIndex(item => item.id === taskId);

    const dialogRef = this.dialog.open(EditTaskComponent, {
      width: '250px',
      data: {
        oldTaskName: this.user.boards[editableBoardId].tasks[editableTaskId].header,
        oldTaskDescription: this.user.boards[editableBoardId].tasks[editableTaskId].description
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.user.boards[editableBoardId].tasks[editableTaskId].header = result.newTaskName;
      this.user.boards[editableBoardId].tasks[editableTaskId].description = result.newTaskDescription;
      this.userService.updateUser(this.user);
    });
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
