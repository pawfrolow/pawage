export interface IQuestion {
  title: string,
  description?: string,
  type: TQuestionType,
  answers?: IAnswer[],
  input?: IInput
}

export interface IInput {
  placeholder: string,
  type?: string,
  allowEmpty?: boolean
}

export type TQuestionType = `${EQuestionTypes}`

export enum EQuestionTypes {
  birthDateKnown = 'birthDateKnown',
  petName = 'petName',
  dogSize = 'dogSize',
}

export interface IAnswer {
  title: string,
  value: string
}

export interface IUserAnswer {
  question: TQuestionType,
  answer: string
}