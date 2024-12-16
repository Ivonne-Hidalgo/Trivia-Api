import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";

const Questions = () => {
  const { state } = useLocation();
  const { nickname, difficulty } = state || {};
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://opentdb.com/api.php?amount=${difficulty == "easy" ? 3 : difficulty === "medium" ? 5 : difficulty === "hard" ? 10:10}&type=multiple`)
      .then((response) => {

        if(response.data.results.length){
          console.log('entro',response.data.results,response.data.results.length)
          setQuestions(response.data.results)
        }
      }
        
        )
      .catch((error) => console.error("Error al cargar las preguntas:", error));
  }, [difficulty]);

  const handleNext = () => {
    if (selectedAnswer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
    } else {
      navigate("/results", { state: { nickname, difficulty, score } });
    }
  };

  if (!questions.length) return <p>Cargando preguntas...</p>;

  return (
    <div>
      <Header
        nickname={nickname}
        questionNumber={currentIndex + 1}
        score={score}
      />
      <QuestionCard
        question={questions[currentIndex].question}
        answers={questions[currentIndex].incorrect_answers.concat(questions[currentIndex].correct_answer)}
        selectedAnswer={selectedAnswer}
        onAnswerChange={setSelectedAnswer}
      />
      <button onClick={handleNext}>Siguiente</button>
    </div>
  );
};

export default Questions;
