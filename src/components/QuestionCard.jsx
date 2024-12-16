import React from 'react';

const QuestionCard = ({ question, answers, selectedAnswer, onAnswerChange }) => (
  <div>
    <h2>{question}</h2>
    {answers.map((answer, index) => (
      <div key={index}>
        <input
          type="radio"
          value={answer}
          checked={selectedAnswer === answer}
          onChange={() => onAnswerChange(answer)}
        />
        {answer}
      </div>
    ))}
  </div>
);

export default QuestionCard;
