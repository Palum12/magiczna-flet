import { Injectable } from '@angular/core';
import { Questionnaire } from '../models/questionnaire';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, of } from 'rxjs';
import { QuestionnaireAnswer, QuestionnaireAnswers } from '../models/questionnaire-answers';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  private baseUrl = 'https://magiczna-flet-api.azurewebsites.net'

  constructor(private httpClient: HttpClient) { }

  public getQuestionnaire(): Observable<Questionnaire> {
    //return this.httpClient.get<Questionnaire>(this.baseUrl + '/api/Quiz/GetQuizQuestions);
    return of(this.questionnaire).pipe(delay(100));
  }

  public sendFilledQuestionnaire(questionnaire: Questionnaire): Observable<void> {
    const body = this.mapQuestionnaireToAnswers(questionnaire);
    return this.httpClient.post<void>(this.baseUrl + '/api/Quiz/PostQuizResults', body);
  }

  private mapQuestionnaireToAnswers(questionnaire: Questionnaire): QuestionnaireAnswers {
    const questionnaireAnswers = questionnaire.questions.map(q => {
     return <QuestionnaireAnswer> {
       questionId: q.id,
       answearId: q.answers.find(x => x.isChecked)?.id
     }
   });

   const result = <QuestionnaireAnswers> {questionnaireAnswers: questionnaireAnswers};
   return result;
  }


  questionnaire = <Questionnaire>{
    "id": 1,
    "questions": [
      {
        "id": 1,
        "value": "Czym powinieneś kierować się przy wyborze kierunku studiów?",
        "answers": [
          {"id": 1, "value": "Zainteresowaniami", "isChecked": false},
          {"id": 2, "value": "Opinią rodziny", "isChecked": false},
          {"id": 3, "value": "Zarobkami po studiach", "isChecked": false},
          {"id": 4, "value": "Lokalizacją uczelni", "isChecked": false}
        ]
      },
      {
        "id": 2,
        "value": "Co to jest studia zaoczne?",
        "answers": [
          {"id": 1, "value": "Studia przez internet", "isChecked": false},
          {"id": 2, "value": "Studia wieczorowe", "isChecked": false},
          {"id": 3, "value": "Studia w weekendy", "isChecked": false},
          {"id": 4, "value": "Wszystkie odpowiedzi są poprawne", "isChecked": false}
        ]
      },
      {
        "id": 3,
        "value": "Czy warto wybierać studia dwukierunkowe?",
        "answers": [
          {"id": 1, "value": "Tak, bo poszerzają horyzonty", "isChecked": false},
          {"id": 2, "value": "Nie, bo są zbyt trudne", "isChecked": false},
          {"id": 3, "value": "Tak, bo zwiększają szanse na rynku pracy", "isChecked": false},
          {"id": 4, "value": "To zależy od indywidualnych preferencji", "isChecked": false}
        ]
      },
      {
        "id": 4,
        "value": "Czy warto rozważyć studia za granicą?",
        "answers": [
          {"id": 1, "value": "Tak, bo pozwalają na poznawanie świata", "isChecked": false},
          {"id": 2, "value": "Nie, bo są zbyt drogie", "isChecked": false},
          {"id": 3, "value": "Tak, bo zwiększają atrakcyjność na rynku pracy", "isChecked": false},
          {"id": 4, "value": "To zależy od możliwości finansowych", "isChecked": false}
        ]
      },
      {
        "id": 5,
        "value": "Jak znaleźć uczelnię, która najbardziej Ci odpowiada?",
        "answers": [
          {"id": 1, "value": "Przeczytać opinie w internecie", "isChecked": false},
          {"id": 2, "value": "Odwiedzić dni otwarte uczelni", "isChecked": false},
          {"id": 3, "value": "Porozmawiać z obecnymi studentami", "isChecked": false},
          {"id": 4, "value": "Wszystkie odpowiedzi są poprawne", "isChecked": false}
        ]
      },
      {
        "id": 6,
        "value": "Czy warto studiować na prywatnej uczelni?",
        "answers": [
          {"id": 1, "value": "Tak, bo są lepiej wyposażone", "isChecked": false},
          {"id": 2, "value": "Nie, bo są zbyt drogie", "isChecked": false},
          {"id": 3, "value": "Tak, bo mają lepszy kontakt z biznesem", "isChecked": false},
          {"id": 4, "value": "To zależy od konkretnego przypadku", "isChecked": false}
        ]
      },
      {
        "id": 7,
        "value": "Czy warto studiować dwa kierunki jednocześnie?",
        "answers": [
          {"id": 1, "value": "Tak, bo to zwiększa wiedzę i umiejętności", "isChecked": false},
          {"id": 2, "value": "Nie, bo to zbyt męczące", "isChecked": false},
          {"id": 3, "value": "Tak, bo to zwiększa szanse na rynku pracy", "isChecked": false},
          {"id": 4, "value": "To zależy od zdolności organizacyjnych", "isChecked": false}
        ]
      },
      {
        "id": 8,
        "value": "Czy warto zwracać uwagę na rankingi uczelni?",
        "answers": [
          {"id": 1, "value": "Tak, bo to ważne źródło informacji", "isChecked": false},
          {"id": 2, "value": "Nie, bo są subiektywne", "isChecked": false},
          {"id": 3, "value": "Tak, ale nie jako jedyny kryterium", "isChecked": false},
          {"id": 4, "value": "To zależy od konkretnego rankingu", "isChecked": false}
        ]
      },
      {
        "id": 9,
        "value": "Czy warto brać pod uwagę opinię rodziny i znajomych przy wyborze studiów?",
        "answers": [
          {"id": 1, "value": "Tak, bo znają Cię najlepiej", "isChecked": false},
          {"id": 2, "value": "Nie, bo to Twoja decyzja", "isChecked": false},
          {"id": 3, "value": "Tak, ale nie jako główne kryterium", "isChecked": false},
          {"id": 4, "value": "To zależy od konkretnego przypadku", "isChecked": false}
        ]
      },
      {
        "id": 10,
        "value": "Jaką formę studiów warto wybrać?",
        "answers": [
          {"id": 1, "value": "Stacjonarne", "isChecked": false},
          {"id": 2, "value": "Zaoczne", "isChecked": false},
          {"id": 3, "value": "Wieczorowe", "isChecked": false},
          {"id": 4, "value": "To zależy od indywidualnych preferencji", "isChecked": false}
        ]
      },
      {
        "id": 11,
        "value": "Czy wybór studiów powinien zależeć od możliwości finansowych?",
        "answers": [
          {"id": 1, "value": "Tak, to ważny czynnik", "isChecked": false},
          {"id": 2, "value": "Nie, zawsze można znaleźć źródło finansowania", "isChecked": false},
          {"id": 3, "value": "Tak, ale nie jako główne kryterium", "isChecked": false},
          {"id": 4, "value": "To zależy od indywidualnej sytuacji", "isChecked": false}
        ]
      },
      {
        "id": 12,
        "value": "Czy warto wybrać studia, które zapewniają staż czy praktyki?",
        "answers": [
          {"id": 1, "value": "Tak, bo to ważne doświadczenie", "isChecked": false},
          {"id": 2, "value": "Nie, bo to nie zawsze się opłaca", "isChecked": false},
          {"id": 3, "value": "Tak, bo to zwiększa szanse na rynku pracy", "isChecked": false},
          {"id": 4, "value": "To zależy od kierunku studiów", "isChecked": false}
        ]
      },
      {
        "id": 13,
        "value": "Czy wybór uczelni powinien zależeć od lokalizacji?",
        "answers": [
          {"id": 1, "value": "Tak, bo to wpływa na komfort życia", "isChecked": false},
          {"id": 2, "value": "Nie, bo to nieistotne", "isChecked": false},
          {"id": 3, "value": "Tak, ale nie jako główne kryterium", "isChecked": false},
          {"id": 4, "value": "To zależy od indywidualnych preferencji", "isChecked": false}
        ]
      },
      {
        "id": 14,
        "value": "Czy warto wybrać uczelnię z dobrą opinią?",
        "answers": [
          {"id": 1, "value": "Tak, bo to ważne", "isChecked": false},
          {"id": 2, "value": "Nie, bo opinie są subiektywne", "isChecked": false},
          {"id": 3, "value": "Tak, ale nie jako jedyny kryterium", "isChecked": false},
          {"id": 4, "value": "To zależy od konkretnego przypadku", "isChecked": false}
        ]
      },
      {
        "id": 15,
        "value": "Czy warto zwracać uwagę na ofertę pozalekcyjną uczelni?",
        "answers": [
          {"id": 1, "value": "Tak, bo to ważne dla rozwoju osobistego", "isChecked": false},
          {"id": 2, "value": "Nie, bo to nieistotne", "isChecked": false},
          {"id": 3, "value": "Tak, ale nie jako główne kryterium", "isChecked": false},
          {"id": 4, "value": "To zależy od indywidualnych preferencji", "isChecked": false}
        ]
      },
      {
        "id": 16,
        "value": "Czy warto wybrać studia na podstawie popularności kierunku?",
        "answers": [
          {"id": 1, "value": "Tak, bo to gwarantuje pracę", "isChecked": false},
          {"id": 2, "value": "Nie, bo to nie zawsze się opłaca", "isChecked": false},
          {"id": 3, "value": "Tak, ale nie jako główne kryterium", "isChecked": false},
          {"id": 4, "value": "To zależy od indywidualnych preferencji", "isChecked": false}
        ]
      },
      {
        "id": 17,
        "value": "Czy warto wybrać studia na podstawie progów punktowych?",
        "answers": [
          {"id": 1, "value": "Tak, bo to wskazuje na prestiż", "isChecked": false},
          {"id": 2, "value": "Nie, bo to nie zawsze jest miarodajne", "isChecked": false},
          {"id": 3, "value": "Tak, ale nie jako główne kryterium", "isChecked": false},
          {"id": 4, "value": "To zależy od indywidualnych preferencji", "isChecked": false}
        ]
      },
      {
        "id": 18,
        "value": "Czy warto wybrać studia, na które trzeba się przeprowadzić?",
        "answers": [
          {"id": 1, "value": "Tak, bo to nowe doświadczenie", "isChecked": false},
          {"id": 2, "value": "Nie, bo to duży koszt", "isChecked": false},
          {"id": 3, "value": "Tak, jeżeli uczelnia jest tego warta", "isChecked": false},
          {"id": 4, "value": "To zależy od indywidualnych preferencji", "isChecked": false}
        ]
      },
      {
        "id": 19,
        "value": "Czy warto wybrać studia, które są trudne do ukończenia?",
        "answers": [
          {"id": 1, "value": "Tak, bo to wyzwanie", "isChecked": false},
          {"id": 2, "value": "Nie, bo to stresujące", "isChecked": false},
          {"id": 3, "value": "Tak, bo to prestiżowe", "isChecked": false},
          {"id": 4, "value": "To zależy od indywidualnych preferencji", "isChecked": false}
        ]
      },
      {
        "id": 20,
        "value": "Czy warto wybrać studia, na których jest dużo matematyki?",
        "answers": [
          {"id": 1, "value": "Tak, bo to rozwija umysł", "isChecked": false},
          {"id": 2, "value": "Nie, bo to trudne", "isChecked": false},
          {"id": 3, "value": "Tak, jeżeli ktoś lubi matematykę", "isChecked": false},
          {"id": 4, "value": "To zależy od indywidualnych preferencji", "isChecked": false}
        ]
      }
    ]
  };
  
}
