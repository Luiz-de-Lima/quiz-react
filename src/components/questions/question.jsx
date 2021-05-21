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

  const [AtualQuestion, setQuestion] = useState(0);
  const [Result, setResult] = useState(0);

 

  const isValidityOnClick = (isCorrect) => {
    if (isCorrect) {
      setResult(Result + 1);
    }

     const NextQuestion = AtualQuestion +1;
 
  if (NextQuestion < question.length) {
    setQuestion(NextQuestion)
  }else{
    alert('Fim do Questionario')
  };
 

 
   

  } /* else {
    //console.log("fim do quiz");
  } */


  return (
    <div className="container">

     

      <div className="countQuestions">
        <span>Questão {AtualQuestion +1}
        /{question.length}</span>
      </div>

      <div className="NameQuestion">
        <h2>{question[AtualQuestion].questionText}</h2>
      </div>

      {question[AtualQuestion].alternativas.map((alternativa) => (
        <button onClick={() => isValidityOnClick(alternativa.isCorrect)}>
          {alternativa.answerText}
        </button>
      ))}

<div className="Result">
        <p>Sua pontuação é {Result}</p>
      </div>
    </div>
  );
}
