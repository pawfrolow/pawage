import { EPetType, TPetToHuman } from "@/types/pet.types";
import { pets } from "../pets";

export const catYearsToHuman: TPetToHuman[] = [
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
  ...[...Array(pets[EPetType.cat].maxAge)].filter((_, i) => i !== 0).map((_, i) => ({
    pet: i + 2,
    human: 20 + 4 * (i + 1),
  }))
]