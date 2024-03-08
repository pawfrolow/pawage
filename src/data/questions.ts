import { EPetType, TPetType } from "types/pet.types";
import { EQuestionTypes, IAnswer, IQuestion } from "types/question.types";

export const YesAnswer: IAnswer = {
  title: 'questions.common.answers.yes',
  value: 'yes'
}

export const NoAnswer: IAnswer = {
  title: 'questions.common.answers.no',
  value: 'no'
}

export const YesNoAnswers: IAnswer[] = [YesAnswer, NoAnswer]

export const commonQuestions: IQuestion[] = [
  {
    title: 'questions.petName.title',
    description: '',
    type: EQuestionTypes.petName,
    input: {
      placeholder: 'questions.petName.placeholder',
      allowEmpty: true
    }
  },
  {
    title: 'questions.petAgeKnown.title',
    description: '',
    type: EQuestionTypes.birthDateKnown,
    answers: YesNoAnswers
  },
]

export const catQuestions: IQuestion[] = [
  ...commonQuestions
]

export const dogQuestions: IQuestion[] = [
  commonQuestions[0],
  {
    title: 'questions.dogSize.title',
    description: '',
    type: EQuestionTypes.dogSize,
    answers: [1, 2, 3, 4].map((number) => ({
      title: `questions.dogSize.answers.${number}`,
      value: `${number}`
    }))
  },
  ...commonQuestions.filter((_, idx) => idx > 0),
]

export const hamsterQuestions: IQuestion[] = [
  ...commonQuestions
]

export const rabbitQuestions: IQuestion[] = [
  ...commonQuestions
]

export const questionsByType: Record<TPetType, IQuestion[]> = {
  [EPetType.cat]: catQuestions,
  [EPetType.dog]: dogQuestions,
  [EPetType.hamster]: hamsterQuestions,
  [EPetType.rabbit]: rabbitQuestions
}