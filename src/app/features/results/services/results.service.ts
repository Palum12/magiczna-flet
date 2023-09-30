import { Injectable } from '@angular/core';
import { Results } from '../models/results';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  private baseUrl = 'http://aaa.pl'

  constructor(private httpClient: HttpClient) { }

  public getResults(): Observable<Results> {
    //return this.httpClient.get<Results>(this.baseUrl + '/Results');
    return of(this.Results).pipe(delay(100));
  }

  Results: Results = {
    id: '1',
    expertDescription: 'Moim zdaniem Twoje zainteresowania i umiejętności pasują do zawodów Informatycznych, dlatego polecam Ci te studia. Kiedyś możesz stać się drugim JSONem.',
    fieldOfStudyProposals: [
      {
        "id": "72cd0063-0578-4d4d-9931-b318483d1c36",
        "name": "Informatyka",
        "managingInstitution": "Uniwersytet Jagielloński w Krakowie",
        "level": "drugiego stopnia",
        "launchProfessionalTitle": "magister",
        "launchLanguageofEducation": "polski",
        "disciplines": [
          "informatyka"
        ]
      },
      {
        "id": "72cd0063-0578-4d4d-9931-b318483d1c36",
        "name": "Informatyka",
        "managingInstitution": "Uniwersytet Jagielloński w Krakowie",
        "level": "drugiego stopnia",
        "launchProfessionalTitle": "magister",
        "launchLanguageofEducation": "polski",
        "disciplines": [
          "informatyka"
        ]
      }
    ]
  }

}
