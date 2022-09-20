import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'

interface LoginValues {
  email: string;
  password: string;
}

const Login: NextPage = () => {

  const router = useRouter()

  const form = useForm<LoginValues>();
  const { formState } = form;
  const { isSubmitting } = formState


  const login: SubmitHandler<LoginValues> = async (values) => {

    const res = await signIn('credentials', {
        ...values
    })

      console.log('res', res)

      router.push('/dashboard')
  }

  return (
    <div className='flex h-screen items-center justify-center'>




        <section className='max-w-md w-full bg-white border shadow p-4'>

          <form onSubmit={form.handleSubmit(login)}>

          <div className='mt-4'>
            <label className='w-full text-sm  text-gray-700'>Email</label>
            <input {...form.register('email')} className='w-full px-4 py-2 rounded border focus:border-2 focus:outline-none focus:border-purple-600' />
          </div>


          <div className='mt-4'>
            <label className='w-full text-sm text-gray-700'>Password</label>
            <input type='password' {...form.register('password')} className='w-full px-4 py-2 rounded border focus:border-2 focus:border-purple-600 focus:outline-none' />
          </div>

            
          <div className='mt-4'>

            <button disabled={isSubmitting} className='w-full text-white bg-purple-600 hover:bg-purple-700 px-3 py-2'>Login</button>

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
