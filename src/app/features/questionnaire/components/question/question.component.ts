import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Answer, Question } from '../../models/questionnaire';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() question!: Question;
  @Output() answered = new EventEmitter<void>();

  public answerClick(answer: Answer): void {
    answer.isChecked = true;
    this.answered.emit();
  }
}
