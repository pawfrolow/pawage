export interface IQuestion {
  title: string,
  description?: string,
  type: TQuestionType,
  answers: IAnswer[]
}

export type TQuestionType = `${EQuestionTypes}`

export enum EQuestionTypes {
  birthDateKnown = 'birthDateKnown'
}

export interface IAnswer {
  title: string,
  value: string
}

export interface IUserAnswer {
  question: TQuestionType,
  answer: string
}