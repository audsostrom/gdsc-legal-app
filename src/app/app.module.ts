import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatRadioModule} from '@angular/material/radio';
import { EducationComponent } from './education/education.component';
import { FactComponent } from './fact/fact.component';
import { FactService } from './fact.service';


import { EducationPageComponent } from './education-page/education-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { QuizComponent } from './shared/quiz/quiz.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { MapPageComponent } from './map-page/map-page.component';
import { CongratsComponent } from './congrats/congrats.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SelectLanguageComponent,
    DashboardComponent,
    PageNotFoundComponent,
    EducationComponent,
    FactComponent,
    EducationPageComponent,
    FooterComponent,
    MapPageComponent,
    QuizComponent,
    CongratsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatRadioModule,
    GoogleMapsComponent,
    FormsModule,
  ],
  providers: [FactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
