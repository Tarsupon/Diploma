import { Component } from '@angular/core';
import { AuthService } from './core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Diploma';

  constructor(public auth: AuthService,
              private translate: TranslateService) {
    if (localStorage.getItem('language')) {
      translate.setDefaultLang(localStorage.getItem('language'));
      translate.use(localStorage.getItem('language'));
    } else {
      translate.setDefaultLang('ru');
      translate.use('ru');
      localStorage.setItem('language','ru');
    }
  }
}
