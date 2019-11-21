import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainboardComponent } from './mainboard.component';
import { MainboardRoutingModule } from './mainboard-routing.module';
import { SharedModule } from '../shared';
import { CoreModule } from '../core';
import { AddBoardComponent } from './modals/add-board/add-board.component';
import { EditBoardComponent } from './modals/edit-board/edit-board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTaskComponent } from './modals/add-task/add-task.component';



@NgModule({
  declarations: [MainboardComponent, AddBoardComponent, EditBoardComponent, AddTaskComponent],
  imports: [
    CommonModule,
    MainboardRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddBoardComponent,
    EditBoardComponent,
    AddTaskComponent
  ],
  entryComponents: [
    AddBoardComponent,
    EditBoardComponent,
    AddTaskComponent
  ]
})
export class MainboardModule { }
