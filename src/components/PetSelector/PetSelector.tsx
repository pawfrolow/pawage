import React from 'react'
import { Block, BlockTitle } from '..'
import * as s from './PetSelector.styled';
import { pets } from 'data/pets';
import { TPetType } from 'types/pet.types';
import { useTranslation } from 'react-i18next';

import { PetCard } from './components';

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
