import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainboardComponent } from './mainboard.component';
import { MainboardRoutingModule } from './mainboard-routing.module';
import { SharedModule } from '../shared';
import { CoreModule } from '../core';
import { AddBoardComponent } from './modals/add-board/add-board.component';
import { EditBoardComponent } from './modals/edit-board/edit-board.component';



@NgModule({
  declarations: [MainboardComponent, AddBoardComponent, EditBoardComponent],
  imports: [
    CommonModule,
    MainboardRoutingModule,
    SharedModule,
    CoreModule
  ],
  exports: [
    AddBoardComponent,
    EditBoardComponent,
  ],
  entryComponents: [
    AddBoardComponent,
    EditBoardComponent
  ]
})
export class MainboardModule { }
