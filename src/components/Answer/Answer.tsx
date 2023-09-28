import React from 'react'
import * as s from './Answer.styled';
import { IAnswer } from '@/types/question.types';
import { animation } from '@/utils';
import { useTranslation } from 'next-i18next';

type TAnswerProps = {
  answer: IAnswer,
  onClick: (value: string) => void,
}

export const Answer: React.FC<TAnswerProps> = ({ answer, onClick }) => {
  const { t } = useTranslation()
  return (
    <s.AnswerWrapper
      {...animation.scaleOnHover({ scaleFrom: 0.97, scaleTo: 1.02 })}
      onClick={() => onClick(answer.value)}
    >
      <s.AnswerLabel>
        <s.AnswerInput
          type='radio'
          name={answer.value}
          value={answer.value}
        />
        {t(answer.title)}
      </s.AnswerLabel>
    </s.AnswerWrapper>

  )
}
