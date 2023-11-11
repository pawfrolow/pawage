export enum ELanguages {
  ru = 'ru',
  en = 'en'
}

export type TLanguages = `${ELanguages}`

export interface ILanguage {
  value: TLanguages,
  label: string
}