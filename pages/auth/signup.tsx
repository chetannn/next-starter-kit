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

  console.log(errors)


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
            <input autoComplete="off" {...register('name', { required: true })} className='w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-purple-600' />

            {errors && errors.name && (
              <div className='my-1'>
                <div className='text-xs text-red-500'>Name is required</div>
            </div>
            )}
           
          </div>

          <div className='mt-4'>
            <label className='w-full text-sm  text-gray-700'>Email</label>
            <input {...register('email', { required: true })} className='w-full px-4 py-2 rounded border focus:ring-2 focus:outline-none focus:ring-purple-600' />
                {errors && errors.email && (
              <div className='my-1'>
                <div className='text-xs text-red-500'>Email is required</div>
            </div>
            )}
          </div>


          <div className='mt-4'>
            <label className='w-full text-sm  text-gray-700'>Password</label>
            <input type='password' {...register('password', { required: true })} className='w-full px-4 py-2 rounded border focus:ring-2 focus:ring-purple-600 focus:outline-none' />
               {errors && errors.password && (
              <div className='my-1'>
                <div className='text-xs text-red-500'>Password is required</div>
            </div>
            )}
          </div>


          <div className='mt-4'>
            <label className='w-full text-sm text-gray-700'>Confirm Password</label>
            <input type='password' {...register('confirm_password', { required: true })} className='w-full px-4 py-2 rounded border focus:ring-2 focus:ring-purple-600 focus:outline-none' />
               {errors && errors.confirm_password && (
              <div className='my-1'>
                <div className='text-xs text-red-500'>Confirm Password is required</div>
            </div>
            )}
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
