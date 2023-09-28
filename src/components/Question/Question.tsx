import React from 'react'
import * as s from './Question.styled'
import { IQuestion, IUserAnswer } from '@/types/question.types'
import { Answer, Block, BlockTitle } from '..'
import { useTranslation } from 'next-i18next'

type TQuestionProps = {
  question: IQuestion,
  onSelect: (userAnswer: IUserAnswer) => void
}

export const Question: React.FC<TQuestionProps> = ({ question, onSelect }) => {
  const { t } = useTranslation()
  return (
    <Block>
      <BlockTitle>{t(question.title)}</BlockTitle>
      <s.Answers>
        {question.answers.map(answer => {
          return <Answer
            key={`${question.title}-${answer.title}`}
            answer={answer}
            onClick={(answer) => onSelect({ answer, question: question.type })}
          />
        })}
      </s.Answers>
    </Block>
  )
}
