import { TPetToHuman } from "@/types/pet.types";

export const hamsterYearsToHuman: TPetToHuman[] = [
  { pet: +(1 / 12).toFixed(3), human: 14 },
  { pet: +(2 / 12).toFixed(3), human: 20 },
  { pet: +(4 / 12).toFixed(3), human: 26 },
  { pet: +(6 / 12).toFixed(3), human: 34 },
  { pet: +(8 / 12).toFixed(3), human: 42 },
  { pet: +(10 / 12).toFixed(3), human: 50 },
  { pet: 1, human: 58 },
  { pet: 2, human: 70 },
  { pet: 3, human: 100 },
  { pet: 4, human: 130 },
  { pet: 5, human: 160 },
]