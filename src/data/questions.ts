import { EQuestionTypes, IAnswer, IQuestion } from "@/types/question.types";

export const YesAnswer: IAnswer = {
  title: 'questions.answers.yes',
  value: 'yes'
}

export const NoAnswer: IAnswer = {
  title: 'questions.answers.no',
  value: 'no'
}

export const YesNoAnswers: IAnswer[] = [YesAnswer, NoAnswer]

export const commonQuestions: IQuestion[] = [
  {
    title: 'questions.petName',
    description: '',
    type: EQuestionTypes.petName,
    input: {
      placeholder: 'questions.placeholder.petName',
      allowEmpty: true
    }
  },
  {
    title: 'questions.petAgeKnown',
    description: '',
    type: EQuestionTypes.birthDateKnown,
    answers: YesNoAnswers
  },
]

export const catQuestions: IQuestion[] = [
  ...commonQuestions
]