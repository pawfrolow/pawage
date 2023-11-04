import { EPetType, TPetToHuman } from "@/types/pet.types";
import { pets } from "../pets";

export const rabbitYearsToHuman: TPetToHuman[] = [
  { pet: +(1 / 12).toFixed(3), human: 3 },
  { pet: +(2 / 12).toFixed(3), human: 6 },
  { pet: +(3 / 12).toFixed(3), human: 9 },
  { pet: +(4 / 12).toFixed(3), human: 12 },
  { pet: +(5 / 12).toFixed(3), human: 13 },
  { pet: +(6 / 12).toFixed(3), human: 14 },
  { pet: +(7 / 12).toFixed(3), human: 15 },
  { pet: +(8 / 12).toFixed(3), human: 16 },
  { pet: +(9 / 12).toFixed(3), human: 17 },
  { pet: +(10 / 12).toFixed(3), human: 18 },
  { pet: +(11 / 12).toFixed(3), human: 19 },
  { pet: 1, human: 20 },
  ...[...Array(pets[EPetType.rabbit].maxAge)].filter((_, i) => i !== 0).map((_, i) => ({
    pet: i + 2,
    human: 20 + 6 * (i + 1),
  }))
]