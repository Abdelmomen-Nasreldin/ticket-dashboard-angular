import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('ar'); // Set default language to Arabic
  }

  get isRtlLanguage() {
    return this.translate.currentLang === 'ar';
  }
  toggleLanguage() {
    const currentLang = this.translate.currentLang;
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    this.translate.use(newLang);
  }
  getLanguageDirectionClass() {
    return this.isRtlLanguage ? 'rtl' : 'ltr';
  }
}
