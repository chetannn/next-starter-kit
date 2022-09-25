import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import AppLink from './AppLink'

const NavDropDown = () => {
    return (
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
                    <AppLink href="/profile" className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-gray-700 text-sm`} >
                      Your Profile
                    </AppLink>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <AppLink href="/settings" className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-gray-700 text-sm`} >
                      Settings
                    </AppLink>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <AppLink href="/auth/login" className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-gray-700 text-sm`}>
                      Logout
                    </AppLink>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
    );
}

export default NavDropDown