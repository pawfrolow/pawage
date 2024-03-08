import React, { FC } from 'react'
import * as s from './TableAge.styled'
import { TPetToHuman } from 'types/pet.types'
import { num2str } from 'utils'
import { useTranslation } from 'react-i18next'

interface ITableAgeProps {
  petToHuman: TPetToHuman[]
}

export const TableAge: FC<ITableAgeProps> = ({ petToHuman }) => {
  const { t } = useTranslation()
  const getFormattedPetAge = (age: number) => {
    let month = age;
    let unit = 'years'
    if (month < 1) {
      month = Math.round(month * 12)
      unit = 'months'
    }
    return `${month} ${num2str(month, [1, 2, 3].map(n => t(`units.forms.${unit}.${n}`)))}`
  }

  return (
    <s.Table>
      <thead>
        <tr>
          <th>{t('TableAge.petHeader')}</th>
          <th>{t('TableAge.humanHeader')}</th>
        </tr>
      </thead>
      <tbody>
        {petToHuman.map(({ pet, human }) => {
          return <tr key={pet}>
            <td>{getFormattedPetAge(pet)}</td>
            <td>{`${human} ${num2str(human, [1, 2, 3].map(n => t(`units.forms.years.${n}`)))}`}</td>
          </tr>
        })}
      </tbody>
    </s.Table>
  )
}
