import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';


@NgModule({
  declarations: [
    ResultsComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    NgChartsModule
  ]
})
export class ResultsModule { }
