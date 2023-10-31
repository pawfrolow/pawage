import { EPetType, TDogKeys, TPetToHuman } from "@/types/pet.types";
import { pets } from "./pets";

const firstThree: TPetToHuman[] = [
  { pet: +(1 / 12).toFixed(3), human: 1 },
  { pet: +(2 / 12).toFixed(3), human: 2 },
  { pet: +(3 / 12).toFixed(3), human: 4 },
  { pet: +(4 / 12).toFixed(3), human: 6 },
  { pet: +(5 / 12).toFixed(3), human: 8 },
  { pet: +(6 / 12).toFixed(3), human: 10 },
  { pet: +(7 / 12).toFixed(3), human: 12 },
  { pet: 1, human: 15 },
  { pet: 1.5, human: 21 },
  { pet: 2, human: 24 },
  { pet: 3, human: 28 },
  { pet: 4, human: 32 },
  { pet: 5, human: 36 },
]

export const dogYearsToHuman: Record<TDogKeys, TPetToHuman[]> = {
  '1': [
    { pet: +(1 / 12).toFixed(3), human: 1 },
    { pet: +(2 / 12).toFixed(3), human: 2 },
    { pet: +(3 / 12).toFixed(3), human: 4 },
    { pet: +(4 / 12).toFixed(3), human: 6 },
    { pet: +(5 / 12).toFixed(3), human: 8 },
    { pet: +(6 / 12).toFixed(3), human: 10 },
    { pet: +(7 / 12).toFixed(3), human: 12 },
    { pet: 1, human: 15 },
    { pet: 1.5, human: 21 },
    { pet: 2, human: 24 },
    ...[...Array(pets[EPetType.dog].maxAge)].filter((_, i) => i !== 0).map((_, i) => ({
      pet: i + 2,
      human: 20 + 4 * (i + 1),
    }))
  ],
  '2': [
    ...firstThree,
    { pet: 6, human: 42 },
    { pet: 7, human: 47 },
    { pet: 8, human: 51 },
    { pet: 9, human: 56 },
    { pet: 10, human: 60 },
    { pet: 11, human: 65 },
    { pet: 12, human: 69 },
    { pet: 13, human: 74 },
    { pet: 14, human: 78 },
    { pet: 15, human: 83 },
    { pet: 16, human: 87 },
    ...[...Array(pets[EPetType.dog].maxAge)].filter((_, i) => i > 15).map((_, i) => ({
      pet: i + 17,
      human: 87 + 5 * (i + 1),
    }))
  ],
  '3': [
    ...firstThree,
    { pet: 6, human: 45 },
    { pet: 7, human: 50 },
    { pet: 8, human: 55 },
    { pet: 9, human: 61 },
    { pet: 10, human: 66 },
    { pet: 11, human: 72 },
    { pet: 12, human: 77 },
    { pet: 13, human: 82 },
    { pet: 14, human: 88 },
    { pet: 15, human: 93 },
    { pet: 16, human: 99 },
    ...[...Array(pets[EPetType.dog].maxAge)].filter((_, i) => i > 15).map((_, i) => ({
      pet: i + 17,
      human: 99 + 6 * (i + 1),
    }))
  ],
  '4': [
    { pet: +(1 / 12).toFixed(3), human: 1 },
    { pet: +(2 / 12).toFixed(3), human: 2 },
    { pet: +(3 / 12).toFixed(3), human: 3 },
    { pet: +(4 / 12).toFixed(3), human: 4 },
    { pet: +(5 / 12).toFixed(3), human: 6 },
    { pet: +(6 / 12).toFixed(3), human: 8 },
    { pet: +(7 / 12).toFixed(3), human: 10 },
    { pet: 1, human: 12 },
    { pet: 1.5, human: 17 },
    { pet: 2, human: 22 },
    { pet: 3, human: 31 },
    { pet: 4, human: 38 },
    { pet: 5, human: 45 },
    { pet: 6, human: 49 },
    { pet: 7, human: 56 },
    { pet: 8, human: 64 },
    { pet: 9, human: 71 },
    ...[...Array(pets[EPetType.dog].maxAge)].filter((_, i) => i > 8).map((_, i) => ({
      pet: i + 10,
      human: 71 + 7 * (i + 1),
    }))
  ],
}