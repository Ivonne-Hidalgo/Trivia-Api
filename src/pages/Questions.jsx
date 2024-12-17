import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";

export const Questions = () => {
  const { state } = useLocation();
  const { nickname, difficulty } = state || {};
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://opentdb.com/api.php?amount=${difficulty === "easy" ? 3 : difficulty === "medium" ? 5 : 10}&type=multiple`)
      .then((response) => {
        if (response.data.results.length) {
          setQuestions(response.data.results);
        }
      })
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
      <header style={{ backgroundColor: "orange", padding: "20px", color: "white", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5em" }}>Trivia Game</h1>
      </header>

      <main style={{ padding: "20px", textAlign: "center" }}>
        <Header
          nickname={nickname}
          questionNumber={currentIndex + 1}
          score={score}
        />
        
        {/* Recuadro para la pregunta */}
        <div style={{
          border: "2px solid rgb(17, 17, 18)", borderRadius: "10px", 
          padding: "20px", margin: "20px auto", width: "80%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
        }}>
          <QuestionCard
            question={questions[currentIndex].question}
            answers={questions[currentIndex].incorrect_answers.concat(questions[currentIndex].correct_answer)}
            selectedAnswer={selectedAnswer}
            onAnswerChange={setSelectedAnswer}
          />
        </div>

        <br />
        <button
          onClick={handleNext}
          style={{ fontSize: "1.5em", padding: "10px 20px" }}
        >
          Next
        </button>
      </main>

      <footer style={{ backgroundColor: "orange", padding: "20px", color: "white", textAlign: "center" }}>
        <p>© 2024 Reto Trivia. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Questions;