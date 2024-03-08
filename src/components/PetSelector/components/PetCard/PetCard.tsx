import React from 'react'
import * as s from './PetCard.styled'
import { TPetInfo, TPetType } from 'types/pet.types'
import { animation } from 'utils'

type TPetCardProps = {
  pet: TPetInfo,
  onClick: (pet: TPetType) => void
}

export const PetCard: React.FC<TPetCardProps> = ({ pet, onClick }) => {
  return (
    <s.Card
      {...animation.scaleOnHover()}
      onClick={() => !pet.inDev && onClick(pet.type)}
    >
      <img src={`/assets/pets/${pet.icon}`} alt={`${pet.title} icon`} width={48} height={48} />
      {pet.inDev && <s.ComingSoon>Soon</s.ComingSoon>}
    </s.Card>
  )
}
