import { Component } from '@angular/core';
import { QuestionnaireService } from './services/questionnaire.service';
import { Questionnaire } from './models/questionnaire';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class QuestionnaireComponent {

  public questionnaire!: Questionnaire;
  public currentQuestionIndex: number = 0;
  public loading = true;

  constructor(private questionnaireService: QuestionnaireService) {
    this.questionnaireService.getQuestionnaire().subscribe(data => {
      this.questionnaire = data;
      this.loading = false;
    });
  }

  nextQuestion(index: number) {
    if (index === this.questionnaire.questions.length) {
      console.log('koniec');
    } else {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion() {
    this.currentQuestionIndex--;
  }
}
