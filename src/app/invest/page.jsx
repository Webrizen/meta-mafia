import InvestorForm from '@/components/system/InvestorForm'
import React from 'react'

export default function page() {
  return (
    <>
     <div className="max-w-lg mx-auto my-5 p-5 bg-slate-100 border-2 border-slate-300 rounded-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Investor Details</h1>
      <InvestorForm />
    </div> 
    </>
  )
}
