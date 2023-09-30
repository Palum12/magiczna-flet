import { Injectable } from '@angular/core';
import { Questionnaire } from '../models/questionnaire';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, of } from 'rxjs';
import { QuestionnaireAnswer, QuestionnaireAnswers } from '../models/questionnaire-answers';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  private baseUrl = 'http://aaa.pl'

  constructor(private httpClient: HttpClient) { }

  public getQuestionnaire(): Observable<Questionnaire> {
    //return this.httpClient.get<Questionnaire>(this.baseUrl + '/questionnaire');
    return of(this.questionnaire).pipe(delay(100));
  }

  public sendFilledQuestionnaire(questionnaire: Questionnaire): Observable<void> {
    const body = this.mapQuestionnaireToAnswers(questionnaire);
    return this.httpClient.post<void>(this.baseUrl + '/questionnaire', body);
  }

  private mapQuestionnaireToAnswers(questionnaire: Questionnaire): QuestionnaireAnswers {
    const questionnaireAnswers: QuestionnaireAnswer[] = [];
    const result = <QuestionnaireAnswers> {questionnaireAnswers: questionnaireAnswers};

    return result;
  }


  questionnaire = <Questionnaire>{
    "questions": [
      {
        "id": 1,
        "question": "Czym powinieneś kierować się przy wyborze kierunku studiów?",
        "answers": [
          {"id": 1, "text": "Zainteresowaniami", "isChecked": false},
          {"id": 2, "text": "Opinią rodziny", "isChecked": false},
          {"id": 3, "text": "Zarobkami po studiach", "isChecked": false},
          {"id": 4, "text": "Lokalizacją uczelni", "isChecked": false}
        ]
      },
      {
        "id": 2,
        "question": "Co to jest studia zaoczne?",
        "answers": [
          {"id": 1, "text": "Studia przez internet", "isChecked": false},
          {"id": 2, "text": "Studia wieczorowe", "isChecked": false},
          {"id": 3, "text": "Studia w weekendy", "isChecked": false},
          {"id": 4, "text": "Wszystkie odpowiedzi są poprawne", "isChecked": false}
        ]
      },
      {
        "id": 3,
        "question": "Czy warto wybierać studia dwukierunkowe?",
        "answers": [
          {"id": 1, "text": "Tak, bo poszerzają horyzonty", "isChecked": false},
          {"id": 2, "text": "Nie, bo są zbyt trudne", "isChecked": false},
          {"id": 3, "text": "Tak, bo zwiększają szanse na rynku pracy", "isChecked": false},
          {"id": 4, "text": "To zależy od indywidualnych preferencji", "isChecked": false}
        ]
      },
      {
        "id": 4,
        "question": "Czy warto rozważyć studia za granicą?",
        "answers": [
          {"id": 1, "text": "Tak, bo pozwalają na poznawanie świata", "isChecked": false},
          {"id": 2, "text": "Nie, bo są zbyt drogie", "isChecked": false},
          {"id": 3, "text": "Tak, bo zwiększają atrakcyjność na rynku pracy", "isChecked": false},
          {"id": 4, "text": "To zależy od możliwości finansowych", "isChecked": false}
        ]
      },
      {
        "id": 5,
        "question": "Jak znaleźć uczelnię, która najbardziej Ci odpowiada?",
        "answers": [
          {"id": 1, "text": "Przeczytać opinie w internecie", "isChecked": false},
          {"id": 2, "text": "Odwiedzić dni otwarte uczelni", "isChecked": false},
          {"id": 3, "text": "Porozmawiać z obecnymi studentami", "isChecked": false},
          {"id": 4, "text": "Wszystkie odpowiedzi są poprawne", "isChecked": false}
        ]
      },
      {
        "id": 6,
        "question": "Czy warto studiować na prywatnej uczelni?",
        "answers": [
          {"id": 1, "text": "Tak, bo są lepiej wyposażone", "isChecked": false},
          {"id": 2, "text": "Nie, bo są zbyt drogie", "isChecked": false},
          {"id": 3, "text": "Tak, bo mają lepszy kontakt z biznesem", "isChecked": false},
          {"id": 4, "text": "To zależy od konkretnego przypadku", "isChecked": false}
        ]
      },
      {
        "id": 7,
        "question": "Czy warto studiować dwa kierunki jednocześnie?",
        "answers": [
          {"id": 1, "text": "Tak, bo to zwiększa wiedzę i umiejętności", "isChecked": false},
          {"id": 2, "text": "Nie, bo to zbyt męczące", "isChecked": false},
          {"id": 3, "text": "Tak, bo to zwiększa szanse na rynku pracy", "isChecked": false},
          {"id": 4, "text": "To zależy od zdolności organizacyjnych", "isChecked": false}
        ]
      },
      {
        "id": 8,
        "question": "Czy warto zwracać uwagę na rankingi uczelni?",
        "answers": [
          {"id": 1, "text": "Tak, bo to ważne źródło informacji", "isChecked": false},
          {"id": 2, "text": "Nie, bo są subiektywne", "isChecked": false},
          {"id": 3, "text": "Tak, ale nie jako jedyny kryterium", "isChecked": false},
          {"id": 4, "text": "To zależy od konkretnego rankingu", "isChecked": false}
        ]
      },
      {
        "id": 9,
        "question": "Czy warto brać pod uwagę opinię rodziny i znajomych przy wyborze studiów?",
        "answers": [
          {"id": 1, "text": "Tak, bo znają Cię najlepiej", "isChecked": false},
          {"id": 2, "text": "Nie, bo to Twoja decyzja", "isChecked": false},
          {"id": 3, "text": "Tak, ale nie jako główne kryterium", "isChecked": false},
          {"id": 4, "text": "To zależy od konkretnego przypadku", "isChecked": false}
        ]
      },
      {
        "id": 10,
        "question": "Jaką formę studiów warto wybrać?",
        "answers": [
          {"id": 1, "text": "Stacjonarne", "isChecked": false},
          {"id": 2, "text": "Zaoczne", "isChecked": false},
          {"id": 3, "text": "Wieczorowe", "isChecked": false},
          {"id": 4, "text": "To zależy od indywidualnych preferencji", "isChecked": false}
        ]
      },
      {
        "id": 11,
        "question": "Czy wybór studiów powinien zależeć od możliwości finansowych?",
        "answers": [
          {"id": 1, "text": "Tak, to ważny czynnik", "isChecked": false},
          {"id": 2, "text": "Nie, zawsze można znaleźć źródło finansowania", "isChecked": false},
          {"id": 3, "text": "Tak, ale nie jako główne kryterium", "isChecked": false},
          {"id": 4, "text": "To zależy od indywidualnej sytuacji", "isChecked": false}
        ]
      },
      {
        "id": 12,
        "question": "Czy warto wybrać studia, które zapewniają staż czy praktyki?",
        "answers": [
          {"id": 1, "text": "Tak, bo to ważne doświadczenie", "isChecked": false},
          {"id": 2, "text": "Nie, bo to nie zawsze się opłaca", "isChecked": false},
          {"id": 3, "text": "Tak, bo to zwiększa szanse na rynku pracy", "isChecked": false},
          {"id": 4, "text": "To zależy od kierunku studiów", "isChecked": false}
        ]
      },
      {
        "id": 13,
        "question": "Czy wybór uczelni powinien zależeć od lokalizacji?",
        "answers": [
          {"id": 1, "text": "Tak, bo to wpływa na komfort życia", "isChecked": false},
          {"id": 2, "text": "Nie, bo to nieistotne", "isChecked": false},
          {"id": 3, "text": "Tak, ale nie jako główne kryterium", "isChecked": false},
          {"id": 4, "text": "To zależy od indywidualnych preferencji", "isChecked": false}
        ]
      },
      {
        "id": 14,
        "question": "Czy warto wybrać uczelnię z dobrą opinią?",
        "answers": [
          {"id": 1, "text": "Tak, bo to ważne", "isChecked": false},
          {"id": 2, "text": "Nie, bo opinie są subiektywne", "isChecked": false},
          {"id": 3, "text": "Tak, ale nie jako jedyny kryterium", "isChecked": false},
          {"id": 4, "text": "To zależy od konkretnego przypadku", "isChecked": false}
        ]
      },
      {
        "id": 15,
        "question": "Czy warto zwracać uwagę na ofertę pozalekcyjną uczelni?",
        "answers": [
          {"id": 1, "text": "Tak, bo to ważne dla rozwoju osobistego", "isChecked": false},
          {"id": 2, "text": "Nie, bo to nieistotne", "isChecked": false},
          {"id": 3, "text": "Tak, ale nie jako główne kryterium", "isChecked": false},
          {"id": 4, "text": "To zależy od indywidualnych preferencji", "isChecked": false}
        ]
      },
      {
        "id": 16,
        "question": "Czy warto wybrać studia na podstawie popularności kierunku?",
        "answers": [
          {"id": 1, "text": "Tak, bo to gwarantuje pracę", "isChecked": false},
          {"id": 2, "text": "Nie, bo to nie zawsze się opłaca", "isChecked": false},
          {"id": 3, "text": "Tak, ale nie jako główne kryterium", "isChecked": false},
          {"id": 4, "text": "To zależy od indywidualnych preferencji", "isChecked": false}
        ]
      },
      {
        "id": 17,
        "question": "Czy warto wybrać studia na podstawie progów punktowych?",
        "answers": [
          {"id": 1, "text": "Tak, bo to wskazuje na prestiż", "isChecked": false},
          {"id": 2, "text": "Nie, bo to nie zawsze jest miarodajne", "isChecked": false},
          {"id": 3, "text": "Tak, ale nie jako główne kryterium", "isChecked": false},
          {"id": 4, "text": "To zależy od indywidualnych preferencji", "isChecked": false}
        ]
      },
      {
        "id": 18,
        "question": "Czy warto wybrać studia, na które trzeba się przeprowadzić?",
        "answers": [
          {"id": 1, "text": "Tak, bo to nowe doświadczenie", "isChecked": false},
          {"id": 2, "text": "Nie, bo to duży koszt", "isChecked": false},
          {"id": 3, "text": "Tak, jeżeli uczelnia jest tego warta", "isChecked": false},
          {"id": 4, "text": "To zależy od indywidualnych preferencji", "isChecked": false}
        ]
      },
      {
        "id": 19,
        "question": "Czy warto wybrać studia, które są trudne do ukończenia?",
        "answers": [
          {"id": 1, "text": "Tak, bo to wyzwanie", "isChecked": false},
          {"id": 2, "text": "Nie, bo to stresujące", "isChecked": false},
          {"id": 3, "text": "Tak, bo to prestiżowe", "isChecked": false},
          {"id": 4, "text": "To zależy od indywidualnych preferencji", "isChecked": false}
        ]
      },
      {
        "id": 20,
        "question": "Czy warto wybrać studia, na których jest dużo matematyki?",
        "answers": [
          {"id": 1, "text": "Tak, bo to rozwija umysł", "isChecked": false},
          {"id": 2, "text": "Nie, bo to trudne", "isChecked": false},
          {"id": 3, "text": "Tak, jeżeli ktoś lubi matematykę", "isChecked": false},
          {"id": 4, "text": "To zależy od indywidualnych preferencji", "isChecked": false}
        ]
      }
    ]
  };
  
}
