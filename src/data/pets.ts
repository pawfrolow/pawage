import { EPetType, TPet } from "@/types/pet.types";

export const pets: TPet = {
  [EPetType.cat]: {
    type: EPetType.cat,
    title: 'pets.cat',
    icon: 'cat.png',
    maxAge: 30,
  },
  [EPetType.dog]: {
    type: EPetType.dog,
    title: 'pets.dog',
    icon: 'dog.png',
    maxAge: 30,
  },
  [EPetType.hamster]: {
    type: EPetType.hamster,
    title: 'pets.hamster',
    icon: 'hamster.png',
    maxAge: 5,
  },
  [EPetType.rabbit]: {
    type: EPetType.rabbit,
    title: 'pets.rabbit',
    icon: 'rabbit.png',
    maxAge: 20,
  }
}