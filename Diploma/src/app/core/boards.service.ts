import { Injectable } from '@angular/core';
import { Board } from '../shared/models/board';
import { AngularFireDatabase, FirebaseListObservable } from '@angular/fire/database-deprecated';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  boards: FirebaseListObservable<Board[]> = null;
  userId: string;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.pipe().subscribe(user => {
      if (user) { this.userId = user.uid; }
    });
  }

  getItemsList(): FirebaseListObservable<Board[]> {
    if (!this.userId) return;
    this.boards = this.db.list(`boards/${this.userId}`);
    return this.boards;
  }

  createBoard(board: Board) {
    this.boards.push(board);
  }
}
