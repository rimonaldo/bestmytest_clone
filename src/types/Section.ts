export interface Section {
    name: string;
    duration: number;
    questions: Question[];
    article?: string;
}

export interface Question {
    id?: string;
    body: string;
    answers: string[]; 
    correctAnswer: number; 
    attribute: string;
}

export interface ReadingSection extends Section {
    id?:string;
    article: string;
    questions: Question[];
    score: number;
}


