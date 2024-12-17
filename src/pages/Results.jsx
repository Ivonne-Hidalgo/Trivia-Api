import React from "react";
import { useLocation } from "react-router-dom";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Results = () => {
  const { state } = useLocation();
  const { nickname, difficulty, score } = state || {};

  // Crear un array de resultados para mostrar en la tabla
  const results = [
    {
      nickname: nickname,
      difficulty: difficulty,
      score: score,
    },
  ];

  return (
    <div>
      <header style={{ backgroundColor: "orange", padding: "20px", color: "white", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5em" }}>Trivia Game</h1>
      </header>

      <main style={{ padding: "20px", textAlign: "center" }}>
        <h2>Resultados</h2>
        <DataTable value={results} style={{ margin: "0 auto", width: "80%" }}>
          <Column field="nickname" header="Nickname" />
          <Column field="difficulty" header="Dificultad" />
          <Column field="score" header="Puntaje" />
        </DataTable>
      </main>

      <footer style={{ backgroundColor: "orange", padding: "20px", color: "white", textAlign: "center" }}>
        <p>© 2024 Reto Trivia. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Results;