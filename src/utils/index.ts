import dayjs, { UnitTypeLong } from "dayjs";
import { catQuestions, dogQuestions, hamsterQuestions, rabbitQuestions } from "@/data/questions";
import { EPetType, TPetType } from "@/types/pet.types";
import { IUserAnswer, TQuestionType } from "@/types/question.types";
import { TUnits } from "@/types/common.types";
import config from "@/config/config";

export * as animation from './animation';
export { calculate } from './calculate'
export { share } from './share'

export const getQuestionsByType = (type: TPetType | null) => {
  switch (type) {
    case EPetType.cat: return catQuestions;
    case EPetType.dog: return dogQuestions;
    case EPetType.hamster: return hamsterQuestions;
    case EPetType.rabbit: return rabbitQuestions;
    default: return [];
  }
}

export const checkAnswer = (answers: IUserAnswer[], questionType: TQuestionType, answer: string) => {
  return answers.find(answer => answer.question === questionType)?.answer === answer
}

export const getAnswer = (answers: IUserAnswer[], questionType: TQuestionType) => {
  return answers.find(answer => answer.question === questionType)?.answer
}

export const dateToUnitFromNow = (date: Date, unit: UnitTypeLong) => Math.abs(dayjs(date).diff(config.currentDate, unit))

export const unitToSeconds = (date: number, unit: TUnits) => {
  return Math.abs(config.currentDate.subtract(date, unit).diff(config.currentDate, 'seconds'))
}

export const maxUnitValue = (unit: TUnits) => {
  switch (unit) {
    case 'months': return 11
    case 'days': return 30
    case 'hours': return 23
    case 'minutes': case 'seconds': return 59;
    default: return 9999999
  }
}

export const num2str = (n: number, textForms: string[]) => {
  n = Math.abs(n) % 100;
  var n1 = n % 10;
  if (n > 10 && n < 20) {
    return textForms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return textForms[1];
  }
  if (n1 == 1) {
    return textForms[0];
  }
  return textForms[2];
};

