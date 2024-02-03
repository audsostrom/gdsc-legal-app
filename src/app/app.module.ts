import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatRadioModule} from '@angular/material/radio';
<<<<<<< HEAD
import { EducationComponent } from './education/education.component';
import { FactComponent } from './fact/fact.component';
import { FactService } from './fact.service';
=======
import { EducationPageComponent } from './education-page/education-page.component';
import { FooterComponent } from './shared/footer/footer.component';
>>>>>>> 030eeafc5baf673c4df1b546456fd17e35520dc9

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SelectLanguageComponent,
    DashboardComponent,
    PageNotFoundComponent,
<<<<<<< HEAD
    EducationComponent,
    FactComponent
=======
    EducationPageComponent,
    FooterComponent
>>>>>>> 030eeafc5baf673c4df1b546456fd17e35520dc9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatRadioModule,
  ],
  providers: [FactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
