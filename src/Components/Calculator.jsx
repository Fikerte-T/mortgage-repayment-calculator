import React from 'react'

const Calculator = () => {
  return (
    <div className='p-8 text-neutral-Slate900 md:w-1/2'>
      <div className='flex flex-col space-y-2 justify-baseline items-baseline md:flex-row md:justify-between md:items-center  mb-8'>
        <h1 className='text-2xl font-bold'>Mortgage Calculator</h1>
        <button className='cursor-pointer underline text-neutral-Slate700'>Clear All</button>
      </div>
      <form action="" className=''>
        <div className='relative mt-4'>
          <label htmlFor="mortgage amount" className='text-neutral-Slate700'>
            <span>Mortgage Amount</span>
            <input type="number" name="mortgage amount" id="mortgate amount" className='peer mt-3 relative z-50 w-full border-1 border-neutral-400 rounded-md h-12 pl-14 font-bold text-neutral-Slate900 focus:outline-none focus:ring-1 focus:ring-primary-lime focus:border-primary-lime hover:border-1 hover:border-neutral-Slate900' />
            <span className='absolute left-0 top-3 transform translate-y-1/2 bg-neutral-Slate100 h-12 py-3 px-4 text-neutral-Slate700 font-semibold peer-focus:bg-primary-lime peer-focus:text-neutral-Slate900'>£</span>
          </label>
        </div>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <div className='relative w-full md:w-[47%] mt-4'>
            <label htmlFor="mortgage term" className='text-neutral-Slate700'>Mortgage Term
              <input type="number" name="mortgage term" id="mortgage term" className='mt-3 relative z-50 w-full border-1 border-neutral-400 rounded-md h-12 pl-4 font-bold text-neutral-Slate900 focus:outline-none focus:ring-1 focus:ring-primary-lime focus:border-primary-lime hover:border-1 hover:border-neutral-Slate900 peer' />
              <span className='pointer-events-none absolute right-0 top-3 transform translate-y-1/2 bg-neutral-Slate100 h-12 py-3 px-4 text-neutral-Slate700 font-semibold peer-focus:bg-primary-lime peer-focus:text-neutral-Slate900'>years</span>
            </label>
          </div>
          <div className='relative w-full md:w-[47%] mt-4'>
            <label htmlFor="interest rate" className='text-neutral-Slate700'>Interest Rate
              <input type="number" name="interest rate" id="interest rate" className='mt-3 relative z-50 w-full border-1 border-neutral-400 rounded-md h-12 pl-4 font-bold text-neutral-Slate900 focus:outline-none focus:ring-1 focus:ring-primary-lime focus:border-primary-lime hover:border-1 hover:border-neutral-Slate900 peer' />
              <span className='pointer-events-none absolute right-0 top-3 transform translate-y-1/2 bg-neutral-Slate100 h-12 py-3 px-4 text-neutral-Slate700 font-semibold peer-focus:bg-primary-lime peer-focus:text-neutral-Slate900'>%</span>
            </label>
          </div>
        </div>
        <div>
          <fieldset className='flex flex-col space-y-3 mt-4'>
            <legend className='text-neutral-Slate700'>Mortgate Type</legend>
            <label className='inline-flex gap-x-4 items-center border-1 border-neutral-400 rounded-md h-12 px-4 cursor-pointer font-bold text-neutral-Slate900 peer-hover:border-2 hover:border-primary-lime has-checked:bg-primary-lime/20 has-checked:border-primary-lime'>
              <input type="radio" name="mortgage type" id="repayment" value="repayment" className='peer' />
              <span>Repayment</span>
            </label>
            <label className='inline-flex gap-x-4 items-center border-1 border-neutral-400 rounded-md h-12 px-4 cursor-pointer font-bold text-neutral-Slate900 peer-hover:border-2 hover:border-primary-lime has-checked:bg-primary-lime/20 has-checked:border-primary-lime'>
                <input type="radio" name="mortgage type" id="interest" value="interest" className='peer'/>
                Interest Only
            </label>

          </fieldset>
        </div>
        <div>
          <button className='cursor-pointer flex justify-center items-center gap-x-2 rounded-4xl bg-primary-lime hover:bg-primary-lime/60 w-full md:w-[80%] p-4 font-bold text-lg mt-8'>
            <img src="./assets/images/icon-calculator.svg" alt="calculator icon" />Calculate Repayments
            </button>
        </div>
      </form>
    </div>
  )
}

export default Calculator