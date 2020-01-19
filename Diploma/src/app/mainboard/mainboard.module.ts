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
import { EditTaskComponent } from './modals/edit-task/edit-task.component';



@NgModule({
  declarations: [MainboardComponent, AddBoardComponent, EditBoardComponent, AddTaskComponent, EditTaskComponent],
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
    AddTaskComponent,
    EditTaskComponent
  ]
})
export class MainboardModule { }
