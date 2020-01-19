import { Component, Input, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../../core';
import { EditBoardComponent } from "../../mainboard/modals/edit-board/edit-board.component";
import { MatDialog } from "@angular/material/dialog";
import { ChooseLangComponent } from "../choose-lang/choose-lang.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() public authUser: firebase.UserInfo;
  constructor(private authService: AuthService,
              private dialog: MatDialog) { }

  public ngOnInit() {
  }

  public showLanguageDialog() {
    const dialogRef = this.dialog.open(ChooseLangComponent, {
      width: '150px',
    });
  }
}
