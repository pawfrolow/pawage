import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import * as s from './AgeSelector.styled'
import { Block, BlockTitle } from '..';
import { EQuestionTypes, IUserAnswer } from 'types/question.types';
import { TPetToHuman, TPetType } from 'types/pet.types';
import { animation, checkAnswer } from 'utils';
import { useTranslation } from 'react-i18next';
import { pets } from 'data/pets';
import config from 'config/config';
import { TNullable } from 'types/common.types';
import { AgeInput } from './components';;

type TAgeSelector = {
  answers: IUserAnswer[],
  petType: TNullable<TPetType>,
  onSelect: (date: Date) => void,
  petToHuman: TPetToHuman[]
}

export const AgeSelector: React.FC<TAgeSelector> = ({ answers, petType, onSelect, petToHuman }) => {
  const [birthDate, setBirthDate] = useState<Date | undefined>()

  const [type, setType] = useState<'calendar' | 'input'>(
    checkAnswer(answers, EQuestionTypes.birthDateKnown, 'yes') ? 'calendar' : 'input'
  )
  const { t, i18n: { language: locale } } = useTranslation();

  if (!petType) return null

  const pet = pets[petType]

  return (
    <Block>
      <s.ButtonRow>
        <s.ButtonType
          selected={type === 'calendar'}
          onClick={() => setType('calendar')}
        >
          {t('AgeSelector.toCalendar')}
        </s.ButtonType>
        <s.ButtonType
          selected={type === 'input'}
          onClick={() => setType('input')}
        >
          {t('AgeSelector.toInput')}
        </s.ButtonType>
        <s.Indicator
          initial={{ x: 0 }}
          animate={{ x: type === 'calendar' ? 0 : '100%' }}
          transition={{ duration: 0.3 }}
          type={type}
        />
      </s.ButtonRow>
      {type === 'calendar' ?
        <s.SectionControls key='calendar' {...animation.fade({ duration: 0.5 })}>
          <BlockTitle>{t('AgeSelector.SelectDate')}</BlockTitle>
          <s.CalendarWrapper style={{ minHeight: 368 }}>
            <Calendar
              onChange={(value) => value instanceof Date && setBirthDate(value)}
              locale={locale}
              maxDate={config.currentDate.toDate()}
              minDate={config.currentDate.subtract(petToHuman[petToHuman.length - 1].pet, 'year').toDate()}
            />
          </s.CalendarWrapper>
        </s.SectionControls>
        :
        <s.SectionControls key='input' {...animation.fade()}>
          <BlockTitle>{t('AgeSelector.EnterAge')}</BlockTitle>
          <AgeInput
            maxAge={pet.maxAge}
            onChange={(value) => setBirthDate(value)}
          />
        </s.SectionControls>
      }
      <s.SubmitButton
        disabled={!birthDate}
        onClick={() => birthDate && onSelect(birthDate)}
      >
        {t('AgeSelector.SubmitButton')}
      </s.SubmitButton>
    </Block>
  )
}
