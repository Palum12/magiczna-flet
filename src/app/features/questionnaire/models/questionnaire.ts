export interface Questionnaire {
    questions: Question[];
}

export interface Question {
    id: number;
    question: string;
    answers: Answer[];
}

export interface Answer {
    text: string;
    id: number;
    isChecked: boolean;
}