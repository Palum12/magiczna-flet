import { Injectable } from '@angular/core';
import { MatchResult, Result } from '../models/results';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  private baseUrl = 'https://magiczna-flet-api.azurewebsites.net'

  constructor(private httpClient: HttpClient) { }

  public getResults(questionnaireId: number): Observable<Result> {
    //return this.httpClient.get<Results>(this.baseUrl + `/GetResults/${questionnaireId}`);
    return of(this.result).pipe(delay(100));
  }



  matchResults: MatchResult[] = [
    {
        name: 'Informatyka',
        percentageMatch: 95.5,
        managingInstitutions: ['Instytucja A', 'Instytucja B']
    },
    {
        name: 'Matematyka',
        percentageMatch: 88,
        managingInstitutions: ['Instytucja C']
    },
    {
        name: 'Biologia',
        percentageMatch: 76,
        managingInstitutions: ['Instytucja D', 'Instytucja E', 'Instytucja F']
    },
    {
        name: 'Angielski',
        percentageMatch: 34,
        managingInstitutions: ['Instytucja E', 'Instytucja F']
    },
    {
        name: 'Niemiecki',
        percentageMatch: 12,
        managingInstitutions: ['Instytucja F']
    }
];

result: Result = {
  id: 0,
  fieldOfStudyProposals: this.matchResults,
  expertDescription: 'test'
}

}
