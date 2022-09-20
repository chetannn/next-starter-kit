import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Login: NextPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()


  function login() {
    router.push('/dashboard')
  }

  return (
    <div className='flex h-screen items-center justify-center'>

        <section className='max-w-md w-full bg-white border shadow p-4'>

          <div className='mt-4'>
            <label className='w-full text-sm  text-gray-700'>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-full px-4 py-2 rounded border focus:border-2 focus:outline-none focus:border-purple-600' />
          </div>


          <div className='mt-4'>
            <label className='w-full text-sm text-gray-700'>Password</label>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-full px-4 py-2 rounded border focus:border-2 focus:border-purple-600 focus:outline-none' />
          </div>

            
          <div className='mt-4'>

            <button onClick={login} className='w-full text-white bg-purple-600 hover:bg-purple-700 px-3 py-2'>Login</button>

            <Link  href='/auth/forgot-password'>
              <a className='flex justify-end text-sm mt-3 text-purple-600'>
                  Forgot Password ?
                </a>
            </Link>

            </div>
          </section>

      </div>
  );
}

export default Login
