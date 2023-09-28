import React from 'react'
import { Block, BlockTitle, PetCard } from '..'
import * as s from './PetSelector.styled';
import { pets } from '@/data/pets';
import { TPetType } from '@/types/pet.types';
import { useTranslation } from 'next-i18next';

type TPetSelectorProps = {
  onClick: (pet: TPetType) => void
}

export const PetSelector: React.FC<TPetSelectorProps> = ({ onClick }) => {
  const { t } = useTranslation()
  return (
    <Block>
      <BlockTitle>{t('PetSelector.Title')}</BlockTitle>
      <s.PetSelector>
        {Object.values(pets).map(pet => {
          return <PetCard
            key={pet.title}
            pet={pet}
            onClick={onClick}
          />
        })}
      </s.PetSelector>
    </Block>
  )
}
