import React, { useMemo, useRef, useState } from 'react'
import { AgeCard, Block, BlockTitle } from '..'
import { useTranslation } from 'next-i18next'
import { calculate } from '@/utils/calculate'
import { useInterval } from '@/hooks'
import * as s from './AgeView.styled'
import { getAnswer, num2str, unitToSeconds } from '@/utils'
import { units } from '@/data/common'
import { TUnits } from '@/types/common.types'
import config from '@/config/config'
import { EQuestionTypes, IUserAnswer } from '@/types/question.types'
import { TPetToHuman } from '@/types/pet.types'

type TAgeViewProps = {
  birthDate: Date,
  userAnswers: IUserAnswer[],
  petToHuman: TPetToHuman[]
}

export const AgeView: React.FC<TAgeViewProps> = ({ birthDate, userAnswers, petToHuman }) => {
  const { speed, age: calculatedAge } = useMemo(() => calculate(birthDate, petToHuman), [birthDate, petToHuman])
  const [age, setAge] = useState(calculatedAge);

  const { t } = useTranslation();
  const petName = getAnswer(userAnswers, EQuestionTypes.petName)

  useInterval(() => {
    setAge(prev => prev + 1)
  }, speed)

  const getFormattedDate = (): Record<TUnits, number> => {
    let calculatedAge = age;
    const dates: Record<TUnits, number> = {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    units.forEach(((unit) => {
      const diff = Math.abs(config.currentDate.diff(config.currentDate.subtract(calculatedAge, 'seconds'), unit))
      dates[unit] = diff
      if (unit !== 'seconds') {
        calculatedAge -= unitToSeconds(dates[unit], unit)
      }
    }))

    return dates
  }

  const dates = getFormattedDate()

  return (
    <Block>
      <BlockTitle>{`${t('AgeView.Title.start')} ${petName ?? ''}${t('AgeView.Title')}`}</BlockTitle>
      <s.AgeRow>
        {units.map((unit) => <AgeCard
          key={unit}
          count={dates[unit]}
          unit={num2str(dates[unit], [1, 2, 3].map(num => t(`units.forms.${unit}.${num}`)))}
        />
        )}
      </s.AgeRow>
    </Block>
  )
}
