import React from 'react'
import { HomeIcon } from '@heroicons/react/24/outline'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import AppLink from './AppLink'

const Sidebar: React.FC = () => {
  return (
    <aside className='h-screen w-64 bg-gray-800'>
      <div className='px-6 pt-12 flex flex-col space-y-8'>
        <div className='p-2 hover:bg-gray-900 rounded-lg'>
          <AppLink className="w-full flex items-center space-x-2" href="/dashboard">
            <HomeIcon className='h-5 w-5 text-gray-200' />
            <p className='tracking-widest text-sm text-gray-200'>
              Dashboard
            </p>
          </AppLink>
        </div>

        <div className='p-2 rounded flex items-center space-x-2 hover:bg-gray-900'>
                <AppLink className="w-full flex items-center space-x-2" href="/settings">
                  <Cog6ToothIcon className='h-5 w-5 text-gray-200' />
                      <p className='tracking-widest text-sm text-gray-200'>
                        Settings
                      </p>
                </AppLink>
        
        </div>

      </div>
    </aside>
  )
}

export default Sidebar
