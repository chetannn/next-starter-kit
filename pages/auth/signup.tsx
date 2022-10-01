import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import Button from '../../components/Button'

type SignupFormValues = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

const SignUp: NextPage = () => {
  const router = useRouter()
  const methods = useForm<SignupFormValues>()

  const { register, formState: { errors, isSubmitting } } = methods


  const signUp: SubmitHandler<SignupFormValues> = async (data) => {

    await fetch('/api/auth/signup', {
      body: JSON.stringify({
        ...data
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      // sign in 
      router.push('/auth/login')
    })

  }

  return (
    <div className='flex font-nunito bg-gray-50 h-screen items-center justify-center'>

        <section className='max-w-md w-full bg-white border rounded-lg shadow p-4'>

          <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(signUp)}>

          <div className='mt-4'>
            <label className='w-full text-sm text-gray-700'>Name</label>
            <input {...register('name')} className='w-full px-4 py-2 rounded border focus:border-2 focus:outline-none focus:border-purple-600' />
          </div>

          <div className='mt-4'>
            <label className='w-full text-sm  text-gray-700'>Email</label>
            <input {...register('email')} className='w-full px-4 py-2 rounded border focus:border-2 focus:outline-none focus:border-purple-600' />
          </div>


          <div className='mt-4'>
            <label className='w-full text-sm  text-gray-700'>Password</label>
            <input type='password' {...register('password')} className='w-full px-4 py-2 rounded border focus:border-2 focus:border-purple-600 focus:outline-none' />
          </div>


          <div className='mt-4'>
            <label className='w-full text-sm text-gray-700'>Confirm Password</label>
            <input type='password' {...register('confirm_password')} className='w-full px-4 py-2 rounded border focus:border-2 focus:border-purple-600 focus:outline-none' />
          </div>

          <div className='mt-4'>
            <Button className="w-full" loading={isSubmitting} disabled={isSubmitting}>Sign Up</Button>
            </div>
        </form>

            </FormProvider>
          </section>

      </div>
    
  );
}

export default SignUp
