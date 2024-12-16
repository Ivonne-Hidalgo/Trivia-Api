import React from 'react';

const Header = ({ nickname, questionNumber, score }) => (
  <header>
    <h1>Trivia Game</h1>
    <h3>Best Players</h3>
    <p>Player: {nickname}</p>
    <p>Question: {questionNumber}</p>
    <p>Score: {score}</p>

  </header>
);

export default Header;
