import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-choose-lang',
  templateUrl: './choose-lang.component.html',
  styleUrls: ['./choose-lang.component.scss']
})
export class ChooseLangComponent {

  constructor(private translate: TranslateService,
              private dialogRef: MatDialogRef<ChooseLangComponent>) { }

  public useLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }
}
