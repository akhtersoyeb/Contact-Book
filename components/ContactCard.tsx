import Image from "next/image"
import type { Contact } from "../lib/localStorage"
import { UserCircleIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { BriefcaseIcon, HomeIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from "next/link"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const ContactCard = ({
  id,
  name,
  phone,
  type,
  isOnWhatsapp,
  profilePicture,
  activateDeleteModal
}) => {


  return (
    <>
      <div className="bg-white group mx-auto flex items-center justify-between shadow rounded-lg max-w-md w-full px-3 py-1.5 hover:shadow-lg hover:cursor-default ">
        <div className="flex items-center gap-x-3">
          {profilePicture ? (
            <Image
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
              src={profilePicture}
              alt="Unable to load"
            />
          ) : (
            <UserCircleIcon className="w-10 h-10 text-slate-600" />
          )}
          <div>
            <h3 className="font-medium text-slate-800 text-lg">{name}</h3>
            <p className="text-slate-500 text-sm">{phone}</p>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <div>
            {isOnWhatsapp && (
              <div className="w-10 h-10 bg-gray-200 rounded-full flex flex-col items-center justify-center">
                <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 text-slate-600" />
              </div>
            )}
          </div>
          <div className="w-10 h-10 bg-gray-200 rounded-full flex flex-col items-center justify-center">
            {type === "personal" && (
              <HomeIcon className="w-6 h-6 text-slate-600" />
            )}
            {type === "office" && (
              <BriefcaseIcon className="w-6 h-6 text-slate-600" />
            )}
          </div>

          <Menu as="div" className="relative inline-block text-left">
            <div className="w-10 h-10 overflow-hidden hover:bg-gray-200 hover:rounded-full ">
              <Menu.Button className="focus:outline-none w-10 h-10 flex flex-col items-center justify-center">
                <EllipsisVerticalIcon className="h-6 w-6 text-slate-600" aria-hidden="true" />
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href={`/edit-contact/${id}`}
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Edit
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm w-full text-start'
                        )}
                        onClick={() => activateDeleteModal(id)}
                      >
                        Delete
                      </button>
                    )}
                  </Menu.Item>


                </div>
              </Menu.Items>
            </Transition>
          </Menu>


        </div>
      </div>


    </>
  )
}

export default ContactCard