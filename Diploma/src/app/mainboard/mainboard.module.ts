import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainboardComponent } from './mainboard.component';
import { MainboardRoutingModule } from './mainboard-routing.module';
import { SharedModule } from '../shared';
import { CoreModule } from '../core';



@NgModule({
  declarations: [MainboardComponent],
  imports: [
    CommonModule,
    MainboardRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class MainboardModule { }
