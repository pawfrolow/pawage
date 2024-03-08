import { AgeSelector, AgeView, BackButton, Footer, Header, Main, Notifications, PetSelector, Question } from 'components'
import { TPetType } from 'types/pet.types'
import { IUserAnswer } from 'types/question.types';
import { animation } from 'utils';
import { useMemo, useState } from 'react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { getPetToHuman } from 'data/convertTables';
import { questionsByType } from 'data/questions';

dayjs.extend(duration);

const App = () => {
  const [selectedPet, setSelectedPet] = useState<TPetType | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState<IUserAnswer[]>([])
  const [birthDate, setBirthDate] = useState<Date | undefined>()

  const petToHuman = useMemo(() => getPetToHuman(selectedPet, userAnswers), [selectedPet, userAnswers])
  const isQuestionsPassed = selectedPet && currentQuestion >= questionsByType[selectedPet].length;

  const step = useMemo(() => {
    if (isQuestionsPassed && !birthDate) return 'age-selector'
    if (isQuestionsPassed && birthDate) return 'age-view'
    if (selectedPet) return `${selectedPet}-${currentQuestion}`
    return 'pet-selector';
  }, [selectedPet, currentQuestion, isQuestionsPassed, birthDate])

  const setAnswerOnQuestion = (userAnswer: IUserAnswer) => {
    setUserAnswers([...userAnswers, userAnswer])
    setCurrentQuestion(prev => prev + 1)
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
      setCurrentQuestion(prev => prev - 1)
      setUserAnswers(userAnswers.filter((_, i) => userAnswers.length - 1 !== i))
      setBirthDate(undefined)
      return
    }

    if (selectedPet) {
      resetState()
    }
  }

  const renderSteps = () => {
    switch (step) {
      case 'pet-selector': return (
        <PetSelector
          onClick={(type) => setSelectedPet(type)}
        />
      )
      case 'age-selector': return (
        <AgeSelector
          answers={userAnswers}
          petType={selectedPet}
          onSelect={setBirthDate}
          petToHuman={petToHuman}
        />
      )
      case 'age-view': return (
        <AgeView
          birthDate={birthDate}
          userAnswers={userAnswers}
          petToHuman={petToHuman}
          type={selectedPet}
        />
      )
      default: return <Question
        type={selectedPet}
        current={currentQuestion}
        onSelect={setAnswerOnQuestion}
      />
    }
  }


  return (
    <>
      <Header />
      <Main key={step} {...animation.switchFadeWithSlide()}>
        {selectedPet && <BackButton onClick={back} isLastStage={!!birthDate} />}
        {renderSteps()}
      </Main>
      <Footer />
      <Notifications />
    </>
  )
}

export default App
