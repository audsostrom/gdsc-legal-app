import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
<<<<<<< HEAD
import { EducationComponent } from './education/education.component';
=======
import { EducationPageComponent } from './education-page/education-page.component';
>>>>>>> 030eeafc5baf673c4df1b546456fd17e35520dc9

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'select-language', component: SelectLanguageComponent},
  {path: 'education', component: EducationPageComponent},
  {path: '', component: LandingComponent},
  {path: 'education', component: EducationComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
