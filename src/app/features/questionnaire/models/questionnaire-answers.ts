export interface QuestionnaireAnswers {
    answers: QuestionnaireAnswer[];
}

export interface QuestionnaireAnswer {
    questionId: number;
    answerId: number;
}