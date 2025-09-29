import { useState } from 'react'
import questions from './data/questions'
import Header from './Components/Header'
import './App.css'

function App() {
  const [tela, setTela] = useState(0)

  return (
    <div>

      <Header /> 
       

      {tela === 0 && (
        <div className="start-screen">
          <h2>Bem-vindo ao Quiz Interativo!</h2>
          <button className="start-button" onClick={() => setTela(1)}>Iniciar Quiz</button>
        </div>
      )}

    </div>



  )
}

export default App
