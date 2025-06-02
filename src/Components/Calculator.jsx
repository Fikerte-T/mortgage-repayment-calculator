import React, { useEffect, useState } from 'react'

const Calculator = ({onDataSubmit}) => {
  
  const [data, setData] = useState(null)
  const [displayData, setDisplayData] = useState(null)
  const [formTarget, setFormTarget] = useState(null)
  const [formErrors, setFormErrors] = useState({})

  const validateForm = (formdata) => {
    const errors = {}
    const amount = (formdata.amount || '').trim()
    const term = (formdata.term || '').trim()
    const rate = (formdata.rate || '').trim()
    const type = formdata.type
    
    if(amount === '')errors.amount = "This field is required";
 
    if(term === ''){ 
      errors.term = "This field is required"
    } else if(term === '0') {
      errors.term = "Term can't be zero"
    }
    if(rate === ''){ 
      errors.rate = "This field is required"
    } else if(rate === '0') {
      errors.rate = "Rate can't be zero"
    }
    if(type === undefined)errors.type = "This field is required"

    return errors

  }

  const handleSubmit = (e) => {
   e.preventDefault()
   setFormTarget(e)
   const formData = new FormData(e.target)
   const newdata = Object.fromEntries(formData.entries())
   
   const errors = validateForm(newdata)
   if(Object.keys(errors).length > 0){
    setFormErrors(errors)
   } else {
    setFormErrors({})
    setData(newdata)
   }
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setData(prev => ({
      ...prev, 
      [name]: name === 'amount' || name === 'term' || name === 'rate' ? parseFloat(value): value
    }))
  }

  const handleClick = () => {
    setData(null)
    setDisplayData(null)
    formTarget.target.reset()
  }

  const MortgageCalc = () => {
    if(data) {

      const {amount, term, rate, type} = data
      const newRate = rate/100
      
      const base = (1 + (newRate/12))
      const exp = term * 12
      const res1 = Math.pow(base, exp)

      const neno = (newRate/12) * res1
      const deno = res1 - 1
      const monthlyRepay = (amount * (neno/deno))
      const totalRepay = monthlyRepay * exp
  
      const totalInterest = totalRepay - amount
      const monthlyInterest = totalInterest / exp

      setDisplayData({monthlyRepay, totalRepay, totalInterest, monthlyInterest, type})
    }
    onDataSubmit(displayData)
  }

  
  useEffect(() => {
    MortgageCalc()
  }, [data])

  return (
    <div className='p-8 text-neutral-Slate900 md:w-1/2'>
      <div className='flex flex-col space-y-2 justify-baseline items-baseline md:flex-row md:justify-between md:items-center  mb-8'>
        <h1 className='text-2xl font-bold'>Mortgage Calculator</h1>
        <button className='cursor-pointer underline text-neutral-Slate700' onClick={handleClick}>Clear All</button>
      </div>
      <form onSubmit={handleSubmit} action="" className=''>
        <div className='relative mt-4'>
          <label htmlFor="mortgage amount" className='text-neutral-Slate700'>
            <span>Mortgage Amount</span>
            <input type="number" step="any" min={0} name="amount" id="mortgate amount" 
              className={`peer mt-3 relative z-50 w-full border-1 rounded-md h-12 pl-14 font-bold  focus:outline-none focus:ring-1   
              ${formErrors.amount ? 'border-primary-red focus:ring-1 focus:ring-primary-red focus:border-primary-red hover:border-primary-red'
                : 'border-neutral-400 text-neutral-Slate900 focus:ring-primary-lime focus:border-primary-lime hover:border-1 hover:border-neutral-Slate900'
              }`}
              onChange={handleChange}
            />
            <span
              className={`absolute left-0 top-3 transform translate-y-1/2 h-12 py-3 px-4 font-semibold rounded-l-sm ${
                formErrors.amount
                  ? 'bg-primary-red text-neutral-Slate100 peer-focus:bg-primary-red peer-focus:text-neutral-Slate100'
                  : 'bg-neutral-Slate100 text-neutral-Slate700 peer-focus:bg-primary-lime peer-focus:text-neutral-Slate900'
                }`}
              >
                £
            </span>
          </label>
          {formErrors.amount && <span className='text-primary-red text-sm mt-3 block'>{formErrors.amount}</span>}
        </div>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <div className='relative w-full md:w-[47%] mt-4'>
            <label htmlFor="mortgage term" className='text-neutral-Slate700'>Mortgage Term
              <input type="number"  step="any" min={0} name="term" id="mortgage term" 
                className={`peer mt-3 relative z-50 w-full border-1 rounded-md h-12 pl-3 font-bold  focus:outline-none focus:ring-1  hover:border-1  
                ${formErrors.term ? 'border-primary-red focus:ring-1 focus:ring-primary-red focus:border-primary-red hover:border-primary-red'
                  : 'border-neutral-400 text-neutral-Slate900 focus:ring-primary-lime focus:border-primary-lime hover:border-neutral-Slate900'
                }`}
                onChange={handleChange}
              />
              <span
              className={`absolute right-0 top-3 transform translate-y-1/2 h-12 py-3 px-4 font-semibold rounded-r-sm ${
                formErrors.term
                  ? 'bg-primary-red text-neutral-Slate100 peer-focus:bg-primary-red peer-focus:text-neutral-Slate100'
                  : 'bg-neutral-Slate100 text-neutral-Slate700 peer-focus:bg-primary-lime peer-focus:text-neutral-Slate900'
                }`}
              >
                years
              </span>
            </label>
            {formErrors.term && <span className='text-primary-red text-sm mt-3 block'>{formErrors.term}</span>}
          </div>
          <div className='relative w-full md:w-[47%] mt-4'>
            <label htmlFor="interest rate" className='text-neutral-Slate700'>Interest Rate
              <input type="number"  step="any" min={0} name="rate" id="interest rate" 
                className={`peer mt-3 relative z-50 w-full border-1 rounded-md h-12 pl-3 font-bold  focus:outline-none focus:ring-1  hover:border-1  
                ${formErrors.rate ? 'border-primary-red focus:ring-1 focus:ring-primary-red focus:border-primary-red hover:border-primary-red'
                  : 'border-neutral-400 text-neutral-Slate900 focus:ring-primary-lime focus:border-primary-lime hover:border-neutral-Slate900'
                }`}
                onChange={handleChange}
              />
              <span
              className={`absolute right-0 top-3 transform translate-y-1/2 h-12 py-3 px-4 font-semibold rounded-r-sm ${
                formErrors.rate
                  ? 'bg-primary-red text-neutral-Slate100 peer-focus:bg-primary-red peer-focus:text-neutral-Slate100'
                  : 'bg-neutral-Slate100 text-neutral-Slate700 peer-focus:bg-primary-lime peer-focus:text-neutral-Slate900'
                }`}
              >
                %
              </span>
            </label>
            {formErrors.rate && <span className='text-primary-red text-sm mt-3 block'>{formErrors.rate}</span>}
          </div>
        </div>
        <div>
          <fieldset className='flex flex-col space-y-3 mt-4'>
            <legend className='text-neutral-Slate700'>Mortgate Type</legend>
            <label className='inline-flex gap-x-4 items-center border-1 border-neutral-400 rounded-md h-12 px-4 cursor-pointer font-bold text-neutral-Slate900 peer-hover:border-2 hover:border-primary-lime has-checked:bg-primary-lime/20 has-checked:border-primary-lime '>
              <input type="radio" name="type" id="repayment" value="repayment" className='peer' onChange={handleChange}/>
              <span>Repayment</span>
            </label>
            <label className='inline-flex gap-x-4 items-center border-1 border-neutral-400 rounded-md h-12 px-4 cursor-pointer font-bold text-neutral-Slate900 peer-hover:border-2 hover:border-primary-lime has-checked:bg-primary-lime/20 has-checked:border-primary-lime'>
                <input type="radio" name="type" id="interest" value="interest" className='peer' onChange={handleChange}/>
                Interest Only
            </label>
            {formErrors.type && <span className='text-primary-red text-sm'>{formErrors.type}</span>}
          </fieldset>
        </div>
        <div>
          <button type='submit' className='cursor-pointer flex justify-center items-center gap-x-2 rounded-4xl bg-primary-lime hover:bg-primary-lime/60 w-full md:w-[80%] p-4 font-bold text-lg mt-8'
          >
            <img src="./assets/images/icon-calculator.svg" alt="calculator icon" />Calculate Repayments
            </button>
        </div>
      </form>
    </div>
  )
}

export default Calculator