import React from 'react'
import * as s from './AgeCard.styled'

type TAgeCardProps = {
  count: number,
  unit: string
}

export const AgeCard: React.FC<TAgeCardProps> = ({ count, unit }) => {
  const time = count < 10 ? `0${count}` : `${count}`
  return (
    <s.AgeCard>
      <s.AgeNumber>
        <s.AgeDigit>{time[0]}</s.AgeDigit>
        <s.AgeDigit>{time[1]}</s.AgeDigit>
        {time[2] && <s.AgeDigit>{time[2]}</s.AgeDigit>}
      </s.AgeNumber>
      <s.AgeUnit>{unit}</s.AgeUnit>
    </s.AgeCard>
  )
}
