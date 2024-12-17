import React from 'react';

const Header = ({ nickname, questionNumber, score }) => (
  <header style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
    <p style={{ fontWeight: 'bold', margin: 0 }}>Player: <span style={{ fontStyle: 'italic' }}>{nickname}</span></p>
    <p style={{ fontWeight: 'bold', margin: 0 }}>Question: <span style={{ fontStyle: 'italic' }}>{questionNumber}</span></p>
    <p style={{ fontWeight: 'bold', margin: 0 }}>Score: <span style={{ fontStyle: 'italic' }}>{score}</span></p>
  </header>
);

export default Header;