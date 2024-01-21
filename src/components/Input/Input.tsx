import React, { FC, useEffect, useState } from 'react'
import * as s from './Input.styled'
import { Answer } from '..'
import { IInput } from '@/types/question.types'
import { useTranslation } from 'next-i18next';

interface IInputProps {
  input: IInput,
  onConfirm: (answer: string) => void
}

export const Input: FC<IInputProps> = ({ input, onConfirm }) => {
  const { t } = useTranslation()
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [touched, setTouched] = useState(false)

  useEffect(() => {
    if (!input.allowEmpty) {
      if (touched) {
        setError(!value)
      }
    }
  }, [input.allowEmpty, touched, value])

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value)
    setTouched(true)
  }

  const handleConfirm = () => {
    if (!input.allowEmpty && !value) {
      setError(true)
      return
    }

    onConfirm(value)
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      handleConfirm()
    }
  }

  return (
    <s.InputWrapper>
      <s.InputFieldWrapper>
        <s.Input
          value={value}
          onChange={onChange}
          type={input.type ?? 'text'}
          placeholder={t(input.placeholder)}
          onKeyDown={onKeyDown}
        />
        {error && <s.Error>{t('questions.input.notEmpty')}</s.Error>}
      </s.InputFieldWrapper>
      <Answer
        answer={{
          title: 'questions.common.answers.confirm',
          value: 'confirm'
        }}
        onClick={handleConfirm}
      />
    </s.InputWrapper>
  )
}
