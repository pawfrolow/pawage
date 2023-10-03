export enum EPetType {
  cat = 'cat',
  dog = 'dog'
}

export type TPetType = `${EPetType}`

export type TPetInfo = {
  type: TPetType,
  title: string,
  icon: string,
  inDev?: boolean,
  maxAge: number,
}

export type TPet = Record<TPetType, TPetInfo>

export type TPetToHuman = {
  pet: number,
  human: number
}