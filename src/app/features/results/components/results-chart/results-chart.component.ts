import { Component, Input, OnInit } from '@angular/core';
import { MatchResult } from '../../models/results';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-results-chart',
  templateUrl: './results-chart.component.html',
  styleUrls: ['./results-chart.component.scss']
})
export class ResultsChartComponent implements OnInit {
  @Input() results!: MatchResult[];

  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: true
  };
  public radarChartLabels!: string[];

  public radarChartData!: ChartConfiguration<'radar'>['data']['datasets'];

  constructor() {}

  ngOnInit(): void {
    this.radarChartLabels = this.results.map(result => result.name);
    const data = this.results.map(result => result.percentageMatch);
    this.radarChartData = [
      { data: data, label: 'Dopasowanie' },
    ];;
  }
}
