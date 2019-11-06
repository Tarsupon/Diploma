import { Injectable } from '@angular/core';
import { FirebaseListObservable } from '@angular/fire/database-deprecated';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../shared/models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userId: string;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.afAuth.authState.pipe().subscribe(user => {
      if (user) { this.userId = user.uid; }
    });
  }

  getUser() {
   return this.afs.doc('users/' + this.userId).valueChanges();
  }

  updateUser(user: User) {
    return this.afs.doc('users/' + this.userId).update(user);
  }
}
