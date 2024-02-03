import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SelectLanguageComponent,
    DashboardComponent,
    PageNotFoundComponent,
    EducationComponent,
    FactComponent
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
