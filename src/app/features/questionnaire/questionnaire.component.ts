import { Component } from '@angular/core';
import { QuestionnaireService } from './services/questionnaire.service';
import { Questionnaire } from './models/questionnaire';
import { trigger, transition, style, animate, group, query, animateChild } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('500ms ease', style({ transform: 'translateX(-100%)' }))
      ]),
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms ease', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class QuestionnaireComponent {

  public questionnaire!: Questionnaire;
  public currentQuestionIndex: number = 0;
  public loading = true;

  constructor(
    private questionnaireService: QuestionnaireService,
    private router: Router
    ) {
    this.questionnaireService.getQuestionnaire().subscribe(data => {
      this.questionnaire = data;
      this.loading = false;
    });
  }

  nextQuestion(index: number) {
    if (index === this.questionnaire.questions.length - 1) {
      this.questionnaireService.sendFilledQuestionnaire(this.questionnaire)
      .subscribe(() => {
        success: () => this.router.navigateByUrl(`results/${this.questionnaire.id}`)
        error: () => alert('ups');
      });
    } else {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion() {
    this.currentQuestionIndex--;
  }
}
