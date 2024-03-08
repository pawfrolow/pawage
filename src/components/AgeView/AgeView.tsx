import React, { useMemo, useRef } from 'react'
import { BlockTitle, Icons } from '..'
import { useTranslation } from 'react-i18next';
import html2canvas from 'html2canvas'
import { calculate, share } from 'utils'
import * as s from './AgeView.styled'
import { getAnswer } from 'utils'
import { EQuestionTypes, IUserAnswer } from 'types/question.types'
import { TPetToHuman, TPetType } from 'types/pet.types'
import dayjs from 'dayjs'
import { useNotificationsContext } from 'context'
import { AgeRow, FactsViewer, TableAge } from './components'
import { TNullable } from 'types/common.types'

type TAgeViewProps = {
  birthDate: Date | undefined,
  userAnswers: IUserAnswer[],
  petToHuman: TPetToHuman[],
  type: TNullable<TPetType>
}

export const AgeView: React.FC<TAgeViewProps> = ({ birthDate, userAnswers, petToHuman, type }) => {
  const { createNotification } = useNotificationsContext()
  const { speed, age: calculatedAge } = useMemo(
    () => calculate(birthDate ?? dayjs().toDate(), petToHuman),
    [birthDate, petToHuman]
  )
  const ageViewRef = useRef(null)
  const { t } = useTranslation();

  const petName = getAnswer(userAnswers, EQuestionTypes.petName)

  const handleShare = () => {
    if (ageViewRef.current) {
      html2canvas(ageViewRef.current).then(canvas => {
        share(canvas, t('utils.share.text'))
        if (!('share' in navigator)) {
          createNotification(t('AgeView.copied'))
        }
      });
    }
  }

  return (
    <s.BlockWrapper >
      <s.AgeViewScreen ref={ageViewRef}>
        <BlockTitle>{`${t('AgeView.Title.start')} ${petName ?? ''}${t('AgeView.Title')}`}</BlockTitle>
        <AgeRow
          speed={speed}
          age={calculatedAge}
        />
      </s.AgeViewScreen>
      {type && <FactsViewer type={type} />}
      <TableAge petToHuman={petToHuman} />
      <s.ButtonShare onClick={handleShare}>
        <Icons.Share size={24} />
      </s.ButtonShare>
    </s.BlockWrapper>
  )
}
