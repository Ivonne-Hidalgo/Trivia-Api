import React from "react";
import { useLocation } from "react-router-dom";
import ResultTable from "../components/ResultTable";

const Results = () => {
  const { state } = useLocation();
  const { nickname, difficulty, score } = state || {};

  return (
    <div>
      <h1>Resultados</h1>
      <ResultTable nickname={nickname} difficulty={difficulty} score={score} />
    </div>
  );
};

export default Results;
