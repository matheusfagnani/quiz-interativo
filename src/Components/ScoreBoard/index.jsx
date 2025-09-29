// pontuação
import React from 'react';
import './styles.css';

const ScoreBoard = ({ score, totalQuestions }) => {
  return (
    <div className="score-board">
      <h2>Pontuação</h2>
      <p>
        Você acertou {score} de {totalQuestions} perguntas.
      </p>
    </div>
  );
};

export default ScoreBoard;
