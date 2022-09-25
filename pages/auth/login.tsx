import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import Input from "../../components/Input"
import Button from '../../components/Button'

interface LoginValues {
  email: string;
  password: string;
}

const Login: NextPage = () => {

  const router = useRouter()

  const form = useForm<LoginValues>();
  const { formState, control } = form;
  const { isSubmitting } = formState


  const login: SubmitHandler<LoginValues> = async (values) => {

    const res = await signIn('credentials', {
        ...values,
        redirect: false
    })

    if(res?.ok) {
      router.push('/dashboard')
    }

  }

  return (
    <div className='flex font-nunito bg-gray-50 h-screen items-center justify-center'>

        <section className='max-w-md w-full bg-white border rounded-lg shadow p-4'>

          <form onSubmit={form.handleSubmit(login)}>

          <div className='mt-4'>
            <label className='w-full text-sm text-gray-700'>Email</label>
             <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => <Input className="w-full px-4 py-2" {...field} />}
            />
          </div>


          <div className='mt-4'>
            <label className='w-full text-sm text-gray-700'>Password</label>
            <input type='password' {...form.register('password')} className='w-full px-4 py-2 rounded border focus:border-2 focus:border-purple-600 focus:outline-none' />
          </div>

            
          <div className='mt-4'>
            <Button className="w-full" disabled={isSubmitting}>Login</Button>

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
