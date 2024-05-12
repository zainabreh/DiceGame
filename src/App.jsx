import React, { useState } from 'react'
import StartGame from './components/StartGame'
import PalyGame from './components/PalyGame';
import './App.css'

const App = () => {
  const [NavigateGame,setNavigateGame] = useState(false);

  const handleNavigate = () => {
    setNavigateGame((prev)=>!prev)
  }

  return (
    <>
    {NavigateGame ? <PalyGame handleNavigate={handleNavigate}/> : <StartGame handleNavigate={handleNavigate}/>}
    </>
  )
}

export default App
