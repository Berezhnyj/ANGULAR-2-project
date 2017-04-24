import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import { RouterModule } from '@angular/router';
import { TranslateModule, MissingTranslationHandler } from 'ng2-translate';
//import {TranslateHttpLoader} from '@ngx-translate/http-loader';


import { routes } from './app.router';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { AdministrationComponent } from './administration/administration.component';
import { MyMissingTranslationHandler } from './missingtemplate.component'

/*export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}*/

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ConfigurationComponent,
    AdministrationComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    TranslateModule.forRoot()
  ],
  exports: [
        TranslateModule
    ],
  providers: [
      { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
