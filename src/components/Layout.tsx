import Sidebar from './Sidebar'
import NavDropDown from './NavDropDown'
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

export default function Layout({ children }: { children: ReactNode} ) {
  return (
    <div className='flex font-nunito min-h-screen antialiased'>
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <nav className='flex py-3 px-6 justify-between items-center bg-white shadow-lg'>
          <div></div>

        <NavDropDown />
        </nav>
        
        <main className='px-4 pt-4 flex-1 bg-gray-100'>{children}</main>
      </div>

    <Toaster />      
    </div>
  );
}
