import type { NextPage } from 'next'
import React, { useState } from 'react'

const Login: NextPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  function login() {

  }

  return (
    <div className='flex h-screen items-center justify-center'>

        <section className='max-w-md w-full bg-white border shadow p-4'>

          <div className='mt-4'>
            <label className='w-full text-sm uppercase text-gray-700'>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-full px-4 py-2 rounded border focus:outline-none' />
          </div>


          <div className='mt-4'>
            <label className='w-full text-sm uppercase text-gray-700'>Password</label>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-full px-4 py-2 rounded border focus:outline-none' />
          </div>

            
          <div className='mt-4'>

            <button onClick={login} className='w-full text-white bg-purple-600 hover:bg-purple-700 px-3 py-2'>Login</button>

            </div>
          </section>

      </div>
  );
}

export default Login
