// question card component
import React from 'react';
import './styles.css';

// criando o componente que mostra a pergunta e as opções e o card de pergunta
const QuestionCard = ({ question, options, onAnswerSelected }) => {
    return (
        <div className="question-card">
            <h2 className="question">{question}</h2>
            <div className="options">
                {options.map((option, index) => (
                    <button key={index} className="option-button" onClick={() => onAnswerSelected(option)}>
                        {option}
                    </button>


                ))}
            </div>
        </div>
    );
}