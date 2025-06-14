import { useState } from 'react'

import './App.css'
import Calculator from './Components/Calculator'
import Result from './Components/Result'

function App() {
  const [message, setMessage] = useState({})
  
  const handleDataFromCalculator = (calcData) => {
    setMessage(calcData)
  }
  return (
    <>
      <main className='font-plusjakarta bg-neutral-Slate100 min-h-screen font-primary flex justify-center items-center'>
        <div className='flex flex-col w-lg md:flex-row md:justify-center md:w-4xl md:items-stretch bg-neutral-White md:rounded-2xl'>
          <Calculator onDataSubmit={handleDataFromCalculator}/>
          <Result message={message} />
        </div>
          
      </main>
    </>
  )
}

export default App
