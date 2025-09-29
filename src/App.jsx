import { useState } from 'react'
import ScoreBoard from './Components/ScoreBoard'
import Header from './Components/Header'
import QuestionCard from './Components/QuestionCard'
import questions from './data/questions'  
import './App.css'

function App() {
  const [tela, setTela] = useState(0)

  return (
 <>
 <Header />
 <ScoreBoard />
 <QuestionCard />
 

 

 </>
  )
}

export default App
