import { TPetToHuman } from "types/pet.types"
import { dateToUnitFromNow, unitToSeconds } from ".";

const convertToSeconds = (item: TPetToHuman): TPetToHuman => {
  return ({
    pet: unitToSeconds(item.pet, 'years'),
    human: unitToSeconds(item.human, 'years')
  })
}

export const calculate = (date: Date, yearsToHuman: TPetToHuman[]) => {
  const petAge = dateToUnitFromNow(date, 'second');
  let age = 0;
  for (let i = 0; i < yearsToHuman.length - 1; i++) {
    const item = convertToSeconds(yearsToHuman[i])
    const nextItem = convertToSeconds(yearsToHuman[i + 1])
    const isUnderFirstIteration = petAge < item.pet && i === 0
    if (isUnderFirstIteration) {
      age = petAge * 12;
      break;
    }

    if (petAge >= item.pet && petAge < nextItem.pet) {
      const petRange = nextItem.pet - item.pet;
      const humanRange = nextItem.human - item.human;
      const petDistance = petAge - item.pet;
      const fraction = petDistance / petRange;
      age = item.human + fraction * humanRange;
      break;
    }
  }

  const speed = Math.round(
    yearsToHuman.reduce((acc, cur) => acc + cur.pet / cur.human * 1000, 0) / yearsToHuman.length
  )

  return {
    age,
    speed
  };
}