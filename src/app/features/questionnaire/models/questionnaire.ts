export interface Questionnaire {
    id: number;
    questions: Question[];
}

export interface Question {
    id: number;
    value: string;
    answers: Answer[];
}

export interface Answer {
    value: string;
    id: number;
    isChecked: boolean;
}