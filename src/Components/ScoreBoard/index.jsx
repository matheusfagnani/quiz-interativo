// pontuação
import React from 'react';
import './styles.css';
// funnção que recebe a pontuação e o total de pergunta respodidas
const ScoreBoard = ({ score, totalQuestions }) => {
    return (
        <div className="score-board">
            <h2>Pontuação</h2>
            <p>
                Você acertou {score} de {totalQuestions} perguntas.
            </p>
            <p>Obrigado por jogar!</p>

        </div>
    );
};

export default ScoreBoard;
