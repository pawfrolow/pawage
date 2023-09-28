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
    onChange(age ? config.currentDate.subtract(+age, 'year').toDate() : undefined)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [age])

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(e.key) && e.key !== 'Backspace') {
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
        onChange={({ target }) => setAge(target.value)}
      />
    </s.AgeInputWrapper>
  )
}
