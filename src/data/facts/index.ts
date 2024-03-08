import ruFacts from './ru.json'
import enFacts from './en.json'
import { IFact } from 'types/facts.types'
import { ELanguages } from 'types/languages.types'

const ru = ruFacts as IFact[]
const en = enFacts as IFact[]

export const facts: Record<`${ELanguages}`, IFact[]> = {
  ru,
  en
}