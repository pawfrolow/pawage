import { TDogKeys, TPetToHuman, TPetType } from "@/types/pet.types"
import { EQuestionTypes, IUserAnswer } from "@/types/question.types"
import { catYearsToHuman, dogYearsToHuman, hamsterYearsToHuman, rabbitYearsToHuman } from "."
import { TNullable } from "@/types/common.types"

export const getPetToHuman = (type: TNullable<TPetType>, userAnswers: IUserAnswer[]): TPetToHuman[] => {
  switch (type) {
    case 'cat': return catYearsToHuman
    case 'dog': {
      const dogSizeFinder = (elem: IUserAnswer) => elem.question === EQuestionTypes.dogSize
      const selectedDog = (userAnswers.find(dogSizeFinder)?.answer ?? '1') as TDogKeys
      return dogYearsToHuman[selectedDog]
    }
    case 'hamster': return hamsterYearsToHuman;
    case 'rabbit': return rabbitYearsToHuman;
    default: return []
  }
}