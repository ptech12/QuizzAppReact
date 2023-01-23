
import './App.css';
import Card from './Components/UI/Card/Card';
import { useState } from "react";
import { Questions } from "./Helper/QuestionBank";
import { QuizContext } from './Helper/Contexts';
import Banner from './Components/UI/Banner/Banner';
//Context


function App() {
  // Global State`
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('menu');
  const [currQuestion, setCurrQuestion] = useState(0);
  console.log(`card score: ${score}, card currQuestion: ${currQuestion}`);

  const restartGame = () => {
    setScore(0);
    setCurrQuestion(0)
    setGameState('start')
  }
  const handleSubmit = () => {
    setGameState('Banner')

  }
  return (
    <div className="App">
      <QuizContext.Provider value={{ score, setScore, gameState, setGameState, currQuestion, setCurrQuestion }}>
        {
          gameState === 'menu'
          &&
          <>
            <h1>Quizz App</h1>
            <button className='menu-btn' onClick={() => setGameState('start')}>Start Quiz</button>

          </>

        }
        {
          gameState === 'start'
          &&
          <>
            <Card questionId={Questions[0].questionId}
              question={Questions[0].prompt}
              options={
                {
                  option1: Questions[0].optionA,
                  option2: Questions[0].optionB,
                  option3: Questions[0].optionC,
                  option4: Questions[0].optionD,
                }
              }
              answer={Questions[0].answer} />

            <Card questionId={Questions[1].questionId}
              question={Questions[1].prompt}
              options={
                {
                  option1: Questions[1].optionA,
                  option2: Questions[1].optionB,
                  option3: Questions[1].optionC,
                  option4: Questions[1].optionD,
                }
              }
              answer={Questions[1].answer} />
            <Card questionId={Questions[2].questionId}
              question={Questions[2].prompt}
              options={
                {
                  option1: Questions[2].optionA,
                  option2: Questions[2].optionB,
                  option3: Questions[2].optionC,
                  option4: Questions[2].optionD,
                }
              }
              answer={Questions[2].answer} />
            <Card questionId={Questions[3].questionId}
              question={Questions[3].prompt}
              options={
                {
                  option1: Questions[3].optionA,
                  option2: Questions[3].optionB,
                  option3: Questions[3].optionC,
                  option4: Questions[3].optionD,
                }
              }
              answer={Questions[3].answer} />
            <Card questionId={Questions[4].questionId}
              question={Questions[4].prompt}
              options={
                {
                  option1: Questions[4].optionA,
                  option2: Questions[4].optionB,
                  option3: Questions[4].optionC,
                  option4: Questions[4].optionD,
                }
              }
              answer={Questions[4].answer} />
            {
              currQuestion === Questions.length &&
              <button type='submit' className='res' onClick={handleSubmit} >Show Results</button>
            }

          </>
        }
        {
          gameState === 'Banner'
          &&
          <>

            <h1>Quiz App</h1>
            <Banner />
            <button className='menu-btn' onClick={restartGame}>Start Quiz</button>
          </>
        }
      </QuizContext.Provider>

      {/* <Card /> */}
    </div>
  );
}

export default App;

