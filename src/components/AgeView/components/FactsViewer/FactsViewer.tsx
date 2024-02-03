import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { facts } from '@/data/facts'
import { useInterval } from '@/hooks'
import { TPetType } from '@/types/pet.types'
import { animation, getRandomArbitrary, randomiseArray } from '@/utils'
import React, { FC, useMemo, useState } from 'react'
import * as s from './FactsViewer.styled'
import { ELanguages } from '@/types/languages.types'

interface IFactsViewerProps {
  type: TPetType
}

export const FactsViewer: FC<IFactsViewerProps> = ({ type }) => {
  const router = useRouter()
  const locale = router.locale as `${ELanguages}`
  const { t } = useTranslation();

  const factsArray = useMemo(() => randomiseArray(facts[locale].filter(f => f.type.includes(type))), [locale, type])
  const [current, setCurrent] = useState(0)

  const fact = factsArray[current]
  const randomNumber = getRandomArbitrary(1, 9999)

  useInterval(() => {
    setCurrent(prev => prev < factsArray.length - 1 ? prev + 1 : 0)
  }, 15000)

  if (!fact) return null

  return (
    <s.FactsWrapper>
      <s.Fact key={`fact-${current}`} {...animation.switchFadeWithSlide()}>
        <s.Title>{fact.title}</s.Title>
        <s.Description>{fact.text}</s.Description>
        <s.Badge>{t('FactsViewer.fact')} #{randomNumber}</s.Badge>
      </s.Fact>
    </s.FactsWrapper>
  )
}
