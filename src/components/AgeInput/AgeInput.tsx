import React, { useEffect, useState } from 'react'
import * as s from './AgeInput.styled';
import config from '@/config/config';

type TAgeInputProps = {
  maxAge: number,
  onChange: (date: Date | undefined) => void
}

export const AgeInput: React.FC<TAgeInputProps> = ({ maxAge, onChange }) => {
  const [age, setAge] = useState('')

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

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/^[0-9]*\.?\,?[0-9]*$/.test(e.key) && e.key !== 'Backspace') {
      e.preventDefault()
    }
  }

  return (
    <s.AgeInputWrapper>
      <s.AgeInputField
        type='number'
        min={1}
        max={maxAge}
        value={age}
        onKeyDown={onKeyDown}
        onChange={({ target }) => +target.value < maxAge && setAge(target.value)}
      />
      <s.Range
        type='range'
        max={maxAge}
        min={1}
        step={0.01}
        onChange={({ target }) => setAge(target.value.replace(/,/, '.'))}
        value={age}
      />
    </s.AgeInputWrapper>
  )
}
