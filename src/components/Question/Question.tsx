import React from 'react'
import * as s from './Question.styled'
import { IUserAnswer } from '@/types/question.types'
import { Answer, Block, BlockSubtitle, BlockTitle, Input } from '..'
import { useTranslation } from 'next-i18next'
import { TPetType } from '@/types/pet.types'
import { questionsByType } from '@/data/questions'
import { TNullable } from '@/types/common.types'

type TQuestionProps = {
  type: TNullable<TPetType>,
  current: number,
  onSelect: (userAnswer: IUserAnswer) => void
}

export const Question: React.FC<TQuestionProps> = ({ type, current, onSelect }) => {
  const { t } = useTranslation()

  if (!type) return null

  const question = questionsByType[type][current]

  if (!question) return null

  return (
    <Block>
      <BlockTitle>{t(question.title)}</BlockTitle>
      {question.description && <BlockSubtitle>{t(question.description)}</BlockSubtitle>}
      {question?.input && <Input
        input={question.input}
        onConfirm={(answer) => onSelect({ answer, question: question.type })}
      />}
      {question.answers && <s.Answers>
        {question.answers?.map(answer => {
          return <Answer
            key={`${question.title}-${answer.title}`}
            answer={answer}
            onClick={(answer) => onSelect({ answer, question: question.type })}
          />
        })}
      </s.Answers>}
    </Block>
  )
}
