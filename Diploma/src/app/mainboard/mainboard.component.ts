import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core';
import { BoardsService } from '../core/boards.service';
import { Board } from '../shared/models/board';

@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.scss']
})
export class MainboardComponent implements OnInit {

  public user: firebase.UserInfo;

  constructor(public auth: AuthService, public service: BoardsService) { }

  ngOnInit() {
    this.auth.getLoggedInUser().pipe().subscribe(
      user => {
        this.user = user;
      }
    );
    console.log(this.service.getItemsList());
  }
  createBoard() {
    const board: Board = {
      boardId: 1,
      boardName: 'Todo',
      boardTasks: []
    };
    this.service.createBoard(board);
  }

}
