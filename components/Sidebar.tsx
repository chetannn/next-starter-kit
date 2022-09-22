import React from 'react'
import { HomeIcon } from '@heroicons/react/24/outline'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const Sidebar: React.FC = () => {
  return (
    <aside className='h-screen w-64 bg-gray-800'>
      <div className='px-3 pt-4 flex flex-col space-y-4'>

        <div className='p-2 flex rounded items-center space-x-2 hover:bg-gray-900'>
          <HomeIcon className='h-5 w-5 text-gray-200' />
          <p className='tracking-widest text-sm text-gray-200'>
            <Link href="/dashboard">Dashboard</Link>
          </p>
        </div>

        <div className='p-2 rounded flex items-center space-x-2 hover:bg-gray-900'>
          <Cog6ToothIcon className='h-5 w-5 text-gray-200' />
          <p className='tracking-widest text-sm text-gray-200'>
            <Link href="/settings">Settings</Link>
          </p>
        </div>

      </div>
    </aside>
  )
}

export default Sidebar
