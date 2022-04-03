/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Example = () => {
  return (
    <Menu as="div" className=" relative inline-block text-left">
      <div>
        <Menu.Button className="click inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none     ">
          All
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" absolute right-0 mt-2 w-56 origin-top-right  divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link href="/documentation">
                  <a className="block  px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-200 hover:text-violet-800 ">
                    {' '}
                    Docs
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/Forum">
                  <a className="block  px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-200 hover:text-violet-800">
                    {' '}
                    Forum
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/blogs">
                  <a className="block  px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-200 hover:text-violet-800">
                    {' '}
                    Blog
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/helpdesk">
                  <a className="block  px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-200 hover:text-violet-800">
                    {' '}
                    HelpDesk
                  </a>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Example
