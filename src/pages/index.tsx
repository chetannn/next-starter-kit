import type { NextPage } from 'next'
import AppLink from '../components/AppLink'

const Home: NextPage = () => {
  return (
    <div className='h-screen font-nunito antialiased'>
      <div className='bg-gray-100 flex flex-col h-full'>
        <nav className='flex justify-end px-4 py-3 gap-4'>
          <AppLink href="/auth/signup">Register</AppLink>
          <AppLink href="/auth/login">Login</AppLink>
        </nav>

        <div className='flex-1 flex items-center justify-center'>
          <div className='bg-white max-w-4xl mx-auto p-8 rounded-lg shadow-lg'>
            <h2 className='font-bold text-gray-900 text-xl'>Next Starter kit: Next.js + Next Auth + Tailwind + Prisma</h2>
            <div className='text-sm text-gray-800 my-4'>A beautifully crafted, production ready starter kit built using Next.js.
              It's like <AppLink className="font-bold text-purple-600 hover:underline" target="_blank" href="https://github.com/laravel/breeze">Laravel Breeze </AppLink>
              for Next.js which includes Email Verification, Password Reset etc. out of the box.
            </div>

            <div className="text-sm">
              <span className='font-semibold'>Some of the packages it includes are:</span>
              <ul className="py-3 flex flex-col gap-2">
                 <li><AppLink className="font-bold text-purple-600 hover:underline" target="_blank" href="https://next-auth.js.org">Next Auth</AppLink></li>
                 <li><AppLink className="font-bold text-purple-600 hover:underline" target="_blank" href="https://prisma.io">Prisma</AppLink></li>
                <li><AppLink className="font-bold text-purple-600 hover:underline" target="_blank" href="https://tailwindcss.com">Tailwind</AppLink></li>
                <li><AppLink className="font-bold text-purple-600 hover:underline" target="_blank" href="https://react-hook-form.com">React Hook Form</AppLink></li>
                <li><AppLink className="font-bold text-purple-600 hover:underline" target="_blank" href="https://github.com/dcodeIO/bcrypt.js">Bcrypt.js</AppLink></li>
                <li><AppLink className="font-bold text-purple-600 hover:underline" target="_blank" href="https://github.com/colinhacks/zod">Zod</AppLink></li>
              </ul>

            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Home
