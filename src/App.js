import React, { Component, useState} from 'react'
import './App.css';

function App(){
  //Въпроси
  const questions = [
    {
      questionText: "Коя е столицата на България ?",
      options: [
        {id: 0, text:"София", isCorrect: true},
        {id: 1, text:"Плевен", isCorrect: false},
        {id: 2, text:"Варна", isCorrect: false},
        {id: 3, text:"Велико Търново", isCorrect: false},
      ]
    },
    {
      questionText: "Коя е столицата на САЩ ?",
      options: [
        {id: 0, text:"Далас", isCorrect: false},
        {id: 1, text:"Ню Йорк", isCorrect: false},
        {id: 2, text:"Вашингтон", isCorrect: true},
        {id: 3, text:"Чикаго", isCorrect: false},
      ]
    },
    {
      questionText: "Коя е столицата на Турция ?",
      options: [
        {id: 0, text:"Анкара", isCorrect: true},
        {id: 1, text:"Истанбул", isCorrect: false},
        {id: 2, text:"Батман", isCorrect: false},
        {id: 3, text:"Одрин", isCorrect: false},
      ]
    },
    {
      questionText: "Коя е столицата на Русия ?",
      options: [
        {id: 0, text:"Самара", isCorrect: false},
        {id: 1, text:"Казан", isCorrect: false},
        {id: 2, text:"Новосибирск", isCorrect: false},
        {id: 3, text:"Москва", isCorrect: true},
      ]
    },
    {
      questionText: "Коя е столицата на Монголия ?",
      options: [
        {id: 0, text:"Барун Урт", isCorrect: false},
        {id: 1, text:"Мьорьон", isCorrect: false},
        {id: 2, text:"Улан Батор", isCorrect: true},
        {id: 3, text:"Дархан", isCorrect: false},
      ]
    },
  ]
  const [showFinalResults, setFinalResults] = useState(false);
  const  [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const optionClicked = (isCorrect) => {
    if(isCorrect)
    {
      setScore(score+1);
    }
    if(currentQuestion + 1 < questions.length){
      setCurrentQuestion(currentQuestion+1);
    } else{
      setFinalResults(true);
    }
    setCurrentQuestion(currentQuestion +1);
  }
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  }
  
 
    return(
      <div className='App'>
        <h1 style={{color:'white'}}>Тест по География: Столици</h1>
        {showFinalResults ?
        (<div className='final-result'>
        <h1>Резултат</h1>
        <h2>
          {score} от {questions.length} правилни отговора. 
        </h2>
        <button onClick={() => restartGame()}>Рестарт</button>  
      </div>)
       : 
        (<div className='question-card' >
          <h2>Въпрос {currentQuestion + 1} от {questions.length}</h2>
          <h3 className='question-text'> {questions[currentQuestion].questionText}</h3>

          <ul>
            {questions[currentQuestion].options.map((option)=>{
              return(
                <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
              )
              })}
          </ul>
        </div>)
        }
      </div>
    );
  }


export default App
