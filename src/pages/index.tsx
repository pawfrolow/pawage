import { AgeSelector, AgeView, BackButton, Footer, Header, Main, PetSelector, Question } from '@/components'
import { TDogKeys, TPetToHuman, TPetType } from '@/types/pet.types'
import { EQuestionTypes, IUserAnswer } from '@/types/question.types';
import { animation, getQuestionsByType } from '@/utils';
import React, { useState } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { catYearsToHuman, dogYearsToHuman, hamsterYearsToHuman, rabbitYearsToHuman } from '@/data/convertTables';

dayjs.extend(duration);

const Home = () => {
  const [selectedPet, setSelectedPet] = useState<TPetType | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState<IUserAnswer[]>([])
  const [birthDate, setBirthDate] = useState<Date | undefined>()
  const questions = getQuestionsByType(selectedPet)
  const question = questions[currentQuestion]
  const isQuestionsPassed = currentQuestion >= questions.length;
  const key = () => {
    if (selectedPet) return `${selectedPet}-${currentQuestion}`
    if (isQuestionsPassed) return 'age-selector'
    return 'pet-selector';
  }

  const setAnswerOnQuestion = (userAnswer: IUserAnswer) => {
    setUserAnswers([...userAnswers, userAnswer])
    setCurrentQuestion(currentQuestion + 1)
  }

  const resetState = () => {
    setSelectedPet(null)
    setBirthDate(undefined)
    setUserAnswers([])
    setCurrentQuestion(0)
  }

  const back = () => {
    if (birthDate) {
      resetState()
      return;
    }
    if (isQuestionsPassed && !!birthDate) {
      setBirthDate(undefined)
      return
    }

    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setUserAnswers(userAnswers.filter((_, i) => userAnswers.length - 1 !== i))
      setBirthDate(undefined)
      return
    }

    if (selectedPet) {
      resetState()
    }
  }

  const getPetToHuman = (): TPetToHuman[] => {
    switch (selectedPet) {
      case 'cat': return catYearsToHuman
      case 'dog': {
        const selectedDog = (userAnswers.find(elem => elem.question === EQuestionTypes.dogSize)?.answer ?? '1') as TDogKeys
        return dogYearsToHuman[selectedDog]
      }
      case 'hamster': return hamsterYearsToHuman;
      case 'rabbit': return rabbitYearsToHuman;
      default: return []
    }
  }

  const renderQuestions = () => {
    if (!selectedPet) return <PetSelector onClick={(type) => setSelectedPet(type)} />;
    if (isQuestionsPassed) {
      if (!birthDate) {
        return <AgeSelector
          answers={userAnswers}
          petType={selectedPet}
          onSelect={setBirthDate}
          petToHuman={getPetToHuman()}
        />
      }

      if (birthDate) {
        return <AgeView
          birthDate={birthDate}
          userAnswers={userAnswers}
          petToHuman={getPetToHuman()}
        />
      }
    }

    return <Question question={question} onSelect={setAnswerOnQuestion} />
  }

  return (
    <>
      <Header />
      <Main key={key()} {...animation.switchFadeWithSlide()}>
        {selectedPet && <BackButton onClick={back} isLastStage={!!birthDate} />}
        {renderQuestions()}
      </Main>
      <Footer />
    </>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default Home
