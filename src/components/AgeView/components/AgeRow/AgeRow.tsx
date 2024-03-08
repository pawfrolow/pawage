import React, { FC, useState } from 'react'
import * as s from './AgeRow.styled'
import { units } from 'data/common'
import { num2str, unitToSeconds } from 'utils'
import { useTranslation } from 'react-i18next';
import { TUnits } from 'types/common.types'
import config from 'config/config'
import { useInterval } from 'hooks'
import { AgeCard } from 'components'

type TAgeRowProps = {
  age: number,
  speed: number
}

export const AgeRow: FC<TAgeRowProps> = ({ age: calculatedAge, speed }) => {
  const { t } = useTranslation()
  const [age, setAge] = useState(calculatedAge);

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
    <s.AgeRow>
      {units.map((unit) => <AgeCard
        key={unit}
        count={dates[unit]}
        unit={num2str(dates[unit], [1, 2, 3].map(num => t(`units.forms.${unit}.${num}`)))}
      />)}
    </s.AgeRow>
  )
}
