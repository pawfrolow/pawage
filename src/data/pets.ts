import { EPetType, TPet } from "@/types/pet.types";

export const pets: TPet = {
  [EPetType.cat]: {
    type: EPetType.cat,
    title: 'pets.cat',
    icon: 'cat.png',
    maxAge: 40,
  },
  [EPetType.dog]: {
    type: EPetType.dog,
    title: 'pets.dog',
    icon: 'dog.png',
    inDev: true,
    maxAge: 40,
  }
}