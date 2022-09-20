import type { NextPage } from 'next'
import React, { useState } from 'react'

const ForgotPassword: NextPage = () => {
  
  const [email, setEmail] = useState('')

  return (
    <div className='flex h-screen items-center justify-center'>

        <section className='max-w-md w-full bg-white border shadow p-4'>

          <div className='mt-4'>
            <label className='w-full text-sm text-gray-700'>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-full px-4 py-2 rounded border focus:border-2 focus:outline-none focus:border-purple-600' />
          </div>
            
          <div className='mt-4'>
            <button className='w-full text-sm text-white bg-purple-600 hover:bg-purple-700 px-3 py-2'>Send Reset Password Link</button>
            </div>
          </section>

      </div>
  )
}

export default ForgotPassword
