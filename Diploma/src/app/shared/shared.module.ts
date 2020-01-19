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
  MatMenuModule,
  MatDialogModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChooseLangComponent } from './choose-lang/choose-lang.component';
import { ScrollingModule } from "@angular/cdk/scrolling";

const MATERIAL_MODULES = [
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  DragDropModule,
  MatExpansionModule,
  MatMenuModule,
  MatDialogModule,
  MatToolbarModule
];

@NgModule({
  declarations: [
    HeaderComponent,
    ChooseLangComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ...MATERIAL_MODULES,
    TranslateModule,
    ScrollingModule
  ],
  exports: [
    FlexLayoutModule,
    ...MATERIAL_MODULES,
    TranslateModule,
    HeaderComponent,
    ChooseLangComponent,
    ScrollingModule
  ],
  entryComponents: [
    ChooseLangComponent
  ]
})
export class SharedModule { }
