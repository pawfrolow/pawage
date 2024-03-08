import React from 'react'
import * as s from './BackButton.styled'
import { useTranslation } from 'react-i18next';

type TBackButtonProps = {
  isLastStage: boolean,
  onClick: () => void
}

export const BackButton: React.FC<TBackButtonProps> = ({ isLastStage, onClick }) => {
  const { t } = useTranslation()
  return (
    <s.ButtonBack onClick={onClick}>
      <span>{'←'}</span>
      {t(`BackButton.${isLastStage ? 'TextToMain' : 'TextBack'}`)}
    </s.ButtonBack>
  )
}
