import React, { useEffect, useState } from 'react'
import * as s from './AgeInput.styled';
import config from '@/config/config';
import { num2str } from '@/utils';
import { useTranslation } from 'react-i18next';
import { AgeCard } from '@/components';

type TAgeInputProps = {
  maxAge: number,
  onChange: (date: Date | undefined) => void
}

export const AgeInput: React.FC<TAgeInputProps> = ({ maxAge, onChange }) => {
  const { t } = useTranslation()
  const [age, setAge] = useState('0')
  const minAge = 0

  useEffect(() => {
    if (age) {
      const integerPart = Math.floor(+age)
      const floatPart = +age - integerPart
      let date = config.currentDate.subtract(integerPart, 'year')

      if (+age - Math.floor(+age) > 0) {
        const months = Math.round(12 * floatPart)
        date = date.subtract(months, 'month')
      }

      onChange(date.toDate())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [age])

  const getAgeInUnits = (unit: string) => {
    const years = +(age.split('.')[0])
    const months = Math.floor((+age % (years === 0 ? 1 : years)) * 12) ?? 0

    const isEmpty = !years && !months

    const count = unit === 'years' ? isEmpty ? 0 : years : months

    return <AgeCard
      key={unit}
      count={count}
      unit={num2str(count, [1, 2, 3].map(n => t(`units.forms.${unit}.${n}`)))}
    />
  }

  return (
    <s.AgeInputWrapper>
      <s.AgeRow>
        {['years', 'months'].map((unit) => getAgeInUnits(unit))}
      </s.AgeRow>
      <s.RangeWrapper>
        <s.AgeCell>{minAge}</s.AgeCell>
        <s.Range
          type='range'
          max={maxAge}
          min={minAge}
          step={0.08333}
          onChange={({ target }) => setAge(target.value.replace(/,/, '.'))}
          value={age}
        />
        <s.AgeCell>{maxAge}</s.AgeCell>
      </s.RangeWrapper>
    </s.AgeInputWrapper>
  )
}
