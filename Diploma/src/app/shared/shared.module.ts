import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatExpansionModule,
  MatMenuModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  DragDropModule,
  MatExpansionModule,
  MatMenuModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ...MATERIAL_MODULES
  ],
  exports: [
    FlexLayoutModule,
    ...MATERIAL_MODULES
  ]
})
export class SharedModule { }
