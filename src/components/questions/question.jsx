import React, { useState } from "react";

import "./question.css";

export default function Questions() {
  const question = [
    {
      questionText: "Quem é o Ceo da tesla?",
      alternativas: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      alternativas: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      alternativas: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [state, setState] = useState({ atualQuestion: 0, result: 0 })
 

  const isValidityOnClick = (isCorrect) => {
    if(state.atualQuestion < question.length - 1) {
      if (isCorrect) {
        setState({
          ...state,
          atualQuestion: state.atualQuestion + 1,
          result: state.result + 1
        })
      } else {
        setState({
          ...state,
          atualQuestion: state.atualQuestion + 1,
        })
      }
    } else {
      alert('fim do questionário')
    }
  } 

  return (
    <div className="container">
      <div className="countQuestions">
        <span>Questão {state.atualQuestion +1}
        /{question.length}</span>
      </div>

      <div className="NameQuestion">
        <h2>{question[state.atualQuestion].questionText}</h2>
      </div>

      {question[state.atualQuestion].alternativas.map((alternativa) => (
        <button onClick={() => isValidityOnClick(alternativa.isCorrect)}>
          {alternativa.answerText}
        </button>
      ))}

<div className="Result">
        <p>Sua pontuação é {state.result}</p>
      </div>
    </div>
  );
}
