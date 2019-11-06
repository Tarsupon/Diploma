import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainboardComponent } from './mainboard.component';
import { MainboardRoutingModule } from './mainboard-routing.module';
import { SharedModule } from '../shared';
import { CoreModule } from '../core';
import { AddBoardComponent } from './add-board/add-board.component';



@NgModule({
  declarations: [MainboardComponent, AddBoardComponent],
  imports: [
    CommonModule,
    MainboardRoutingModule,
    SharedModule,
    CoreModule
  ],
  exports: [
    AddBoardComponent
  ],
  entryComponents: [
    AddBoardComponent
  ]
})
export class MainboardModule { }
