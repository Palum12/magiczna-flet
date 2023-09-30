import { Injectable } from '@angular/core';
import { MatchResult } from '../models/results';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  private baseUrl = 'https://magiczna-flet-api.azurewebsites.net'

  constructor(private httpClient: HttpClient) { }

  public getResults(questionnaireId: number): Observable<MatchResult[]> {
    //return this.httpClient.get<Results>(this.baseUrl + `/GetResults/${questionnaireId}`);
    return of(this.matchResults).pipe(delay(100));
  }

  matchResults: MatchResult[] = [
    {
        name: 'Wynik 1',
        percentageMatch: 95.5,
        managingInstitutions: ['Instytucja A', 'Instytucja B']
    },
    {
        name: 'Wynik 2',
        percentageMatch: 88,
        managingInstitutions: ['Instytucja C']
    },
    {
        name: 'Wynik 3',
        percentageMatch: 76,
        managingInstitutions: ['Instytucja D', 'Instytucja E', 'Instytucja F']
    }
];

}
