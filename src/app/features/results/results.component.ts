import { Component } from '@angular/core';
import { ResultsService } from './services/results.service';
import { Results } from './models/results';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent {
  public results!: Results;
  public isLoading = true;
  public resultsCount = 0;
  public mostPopularDiscipline = '';
  
  constructor(private resultsService: ResultsService) {
    this.resultsService.getResults().subscribe((data: any) => {
      this.results = data;
      this.resultsCount = data.fieldOfStudyProposals.length;
      this.mostPopularDiscipline = this.getMostPopularDiscipline(data.fieldOfStudyProposals);
    });
  }
  
  getMostPopularDiscipline(fieldOfStudyProposals: any): string {
    const disciplines: string[] = [];
    fieldOfStudyProposals.forEach((fieldOfStudyProposal: any) => {
      fieldOfStudyProposal.disciplines.forEach((discipline: string) => {
        disciplines.push(discipline);
      });
    });
    const mostPopularDiscipline = this.getMostPopular(disciplines);
    return mostPopularDiscipline;
  }

  getMostPopular(disciplines: string[]) {
    const map = new Map();
    disciplines.forEach((discipline: string) => {
      if (map.has(discipline)) {
        map.set(discipline, map.get(discipline) + 1);
      } else {
        map.set(discipline, 1);
      }
    });
    let max = 0;
    let mostPopularDiscipline = '';
    map.forEach((value: number, key: string) => {
      if (value > max) {
        max = value;
        mostPopularDiscipline = key;
      }
    });
    return mostPopularDiscipline;
  }
}
