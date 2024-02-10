import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EducationPageComponent } from './education-page/education-page.component';
import { EducationComponent } from './education/education.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { MapPageComponent } from './map-page/map-page.component';


const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'select-language', component: SelectLanguageComponent},
  {path: 'education', component: EducationPageComponent},
  {path: '', component: LandingComponent},
  {path: 'education', component: EducationComponent},
  {path: 'google-maps', component: GoogleMapsComponent},
  {path: 'map-page', component: MapPageComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
