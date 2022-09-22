import Sidebar from './Sidebar'
import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import AppLink from './AppLink';

export default function Layout(props) {
  return (
    <div className='flex min-h-screen antialiased'>
      <Sidebar />
      <div className='flex-1'>
        <nav className='flex py-3 px-6 justify-between items-center bg-white shadow'>
          <div></div>

          <Menu as="div">
            <Menu.Button>
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </Menu.Button>

            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item as={Fragment}>
                  {({ active }) => (
                    <AppLink href="/profile">
                      <a className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-gray-700 text-sm`}>Your Profile</a>
                    </AppLink>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <AppLink href='/settings'>
                      <a className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-gray-700 text-sm`}>Settings</a>
                    </AppLink>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <AppLink href="/logout">
                      <a className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-gray-700 text-sm`}>Logout</a>
                    </AppLink>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </nav>
        
        <main className='px-4 pt-4'>{props.children}</main>
      </div>
    </div>
  );
}
