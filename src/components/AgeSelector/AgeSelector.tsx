import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import * as s from './AgeSelector.styled'
import { AgeInput, Block, BlockTitle } from '..';
import { EQuestionTypes, IUserAnswer } from '@/types/question.types';
import { TPetToHuman, TPetType } from '@/types/pet.types';
import { checkAnswer } from '@/utils';
import { useTranslation } from 'next-i18next';
import { pets } from '@/data/pets';
import { useRouter } from 'next/router';
import config from '@/config/config';
import { catYearsToHuman } from '@/data/convertTables';

type TAgeSelector = {
  answers: IUserAnswer[],
  petType: TPetType,
  onSelect: (date: Date) => void,
  petToHuman: TPetToHuman[]
}

export const AgeSelector: React.FC<TAgeSelector> = ({ answers, petType, onSelect, petToHuman }) => {
  const { locale } = useRouter()
  const [birthDate, setBirthDate] = useState<Date | undefined>()
  const { t } = useTranslation();
  const pet = pets[petType]
  const isKnowBirthDate = checkAnswer(answers, EQuestionTypes.birthDateKnown, 'yes');

  return (
    <Block>
      {isKnowBirthDate ?
        <>
          <BlockTitle>{t('AgeSelector.SelectDate')}</BlockTitle>
          <s.CalendarWrapper style={{ minHeight: 368 }}>
            <Calendar
              onChange={(value) => value instanceof Date && setBirthDate(value)}
              locale={locale}
              maxDate={config.currentDate.toDate()}
              minDate={config.currentDate.subtract(petToHuman[petToHuman.length - 1].pet, 'year').toDate()}
            />
          </s.CalendarWrapper>
        </>
        :
        <>
          <BlockTitle>{t('AgeSelector.EnterAge')}</BlockTitle>
          <AgeInput
            maxAge={pet.maxAge}
            onChange={(value) => setBirthDate(value)}
          />
        </>
      }
      <s.SubmitButton
        disabled={!birthDate}
        onClick={() => birthDate && onSelect(birthDate)}
      >{t('AgeSelector.SubmitButton')}</s.SubmitButton>
    </Block>
  )
}
