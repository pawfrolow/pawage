import { EQuestionTypes, IQuestion } from "@/types/question.types";
import i18n from "next-i18next";

export const catQuestions: IQuestion[] = [
  {
    title: 'questions.petAgeKnown',
    description: '',
    type: EQuestionTypes.birthDateKnown,
    answers: [
      {
        title: 'questions.answers.yes',
        value: 'yes'
      },
      {
        title: 'questions.answers.no',
        value: 'no'
      },
    ]
  },
]