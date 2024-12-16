import React from 'react';

const ResultTable = ({ nickname, difficulty, score }) => (
  <table>
    <thead>
      <tr>
        <th>Nickname</th>
        <th>Dificultad</th>
        <th>Puntaje</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{nickname}</td>
        <td>{difficulty}</td>
        <td>{score}</td>
      </tr>
    </tbody>
  </table>
);

export default ResultTable;
