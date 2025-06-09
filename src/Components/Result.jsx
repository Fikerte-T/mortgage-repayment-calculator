import React, {useContext} from 'react'
import { FormContext } from '../Contexts/FormContext'

const Result = () => {
  const {displayData} = useContext(FormContext)

  const formatNumber = (num) => {
    if(isNaN(num)) return '0.00'
    return Number(num).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
  }
  
  return (
      <div className='bg-neutral-Slate900/95 md:w-1/2 flex md:rounded-lg md:rounded-bl-[4rem]'>
      {
        (Object.keys(displayData).length > 0) ? 
        (
          <div className='flex flex-col items-baseline p-8 space-y-4 '>
            <h2 className='font-bold text-neutral-White text-2xl'>Your results</h2>
            <p className='text-neutral-Slate300 text-sm'> Your results are shown below based on the information you provided. 
                To adjust the results, edit the form and click “calculate repayments” again.</p>
            <div className='bg-neutral-Slate900 rounded-lg w-full mt-6 p-8 border-t-4  border-t-primary-lime'>
              <div className='pb-8 border-b-1 border-b-neutral-Slate700'>
                <p className='text-neutral-Slate300 text-sm mb-2'>Your monthly repayments</p>
                <p className='text-primary-lime font-bold text-6xl'>{displayData.type === 'repayment' ? formatNumber(displayData.monthlyRepay) || '0.00' : displayData.type === 'interest' ? formatNumber(displayData.monthlyInterest) : '0.00'}</p>
              </div>
              <div className='pt-8'>
                <p className='text-neutral-Slate300 text-sm mb-2 font-medium'> Total you'll repay over the term</p>
                <p className='text-neutral-White text-2xl'>{displayData.type === 'repayment' ? formatNumber(displayData.totalRepay) || '0.00' : displayData.type === 'interest' ? formatNumber(displayData.totalInterest) : '0.00'}</p>
              </div>
            </div>
          </div> 
        )
        :
        (
            <div className='p-8 text-center flex flex-col justify-center items-center space-y-4'>
              <img src={`${import.meta.env.BASE_URL}assets/images/illustration-empty.svg`} alt="empty illustration" className='mx-auto'/>
              <h2 className='text-neutral-White text-2xl font-bold'>Results shown here</h2>
              <p className='text-neutral-Slate300'>Complete the form and click “calculate repayments” to see what 
              your monthly repayments would be.</p>
            </div>
        )

      }
      </div>
  )
}
export default Result