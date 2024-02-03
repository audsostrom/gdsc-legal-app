import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'select-language', component: SelectLanguageComponent},
  {path: '', component: LandingComponent},
  {path: 'education', component: EducationComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
