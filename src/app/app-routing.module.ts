import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'results', loadChildren: () => import('./features/results/results.module').then(m => m.ResultsModule) },
  { path: 'questionnaire', loadChildren: () => import('./features/questionnaire/questionnaire.module').then(m => m.QuestionnaireModule) },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
