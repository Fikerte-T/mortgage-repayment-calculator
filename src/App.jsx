import { useState } from 'react'

import './App.css'
import Calculator from './Components/Calculator'
import Result from './Components/Result'
import { FormContext } from './Contexts/FormContext'

function App() {

  const [formValues, setFormValues] = useState({})
  const [displayData, setDisplayData] = useState({})
  const [formTarget, setFormTarget] = useState(null)
  const [formErrors, setFormErrors] = useState({})
  
  return (
    <>
      <FormContext.Provider value={{formValues, displayData, formTarget, formErrors, setFormValues, setDisplayData, setFormTarget, setFormErrors }}>
        <main className='font-plusjakarta bg-neutral-Slate100 min-h-screen font-primary flex justify-center items-center'>
          <div className='flex flex-col w-lg md:flex-row md:justify-center md:w-4xl md:items-stretch bg-neutral-White md:rounded-2xl'>
            <Calculator />
            <Result />
          </div>  
        </main>
      </FormContext.Provider>
    </>
  )
}

export default App
