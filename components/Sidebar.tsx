import React from 'react'
import { HomeIcon  } from '@heroicons/react/24/outline'
import { Cog6ToothIcon  } from '@heroicons/react/24/outline'

const Sidebar : React.FC = () => {
  return (
    <aside className='h-screen w-64 bg-gray-50 border-r'>
       <div className='px-3 pt-4 flex flex-col space-y-4'>
          
         <div className='p-3 flex items-center space-x-2 hover:bg-gray-100'>
         <HomeIcon className='h-5 w-5 text-gray-500'/>
         <p className='tracking-widest text-sm text-gray-600'>
                Home
          </p>
           </div>


         <div className='p-3 flex items-center space-x-2 hover:bg-gray-100'>
         <Cog6ToothIcon  className='h-5 w-5 text-gray-500'/>
         <p className='tracking-widest text-sm text-gray-600'>Settings</p>
           </div>

         </div>
     </aside>
  )
}

export default Sidebar
