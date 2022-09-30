import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import Input from "../../components/Input"
import Button from '../../components/Button'


const Login: NextPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const login  = async (e: any) => {
    e.preventDefault()
    const user = {
      email: email,
      password: password
    }

    const res = await signIn('credentials', {
        ...user,
        redirect: false
    })

    if(res?.ok) {
      router.push('/dashboard')
    }

  }

  return (
    <div className='flex font-nunito bg-gray-50 h-screen items-center justify-center'>

        <section className='max-w-md w-full bg-white border rounded-lg shadow p-4'>

          <form onSubmit={login}>

          <div className='mt-4'>
            <label className='w-full text-sm text-gray-700'>Email</label>
            <Input value={email} onChange={(e: any) => setEmail(e.target.value)} className="w-full px-4 py-2" />
          </div>


          <div className='mt-4'>
            <label className='w-full text-sm text-gray-700'>Password</label>
            <Input value={password} onChange={(e: any) => setPassword(e.target.value)} className='w-full px-4 py-2' />
          </div>

            
          <div className='mt-4'>
            <Button className="w-full">Login</Button>

            <Link  href='/auth/forgot-password'>
              <a className='flex justify-end text-sm mt-3 text-purple-600'>
                  Forgot Password ?
                </a>
            </Link>

            </div>


          </form>

          </section>
      </div>
  );
}

export default Login
