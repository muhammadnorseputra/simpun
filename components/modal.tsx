import { Fragment, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { useRecoilState } from 'recoil'
import { openStateModal } from 'atoms'
import Image from "next/image";
import Maintenance from '../public/maintenance.png'

function MyDialog() {
  const [isOpen, setIsOpen] = useRecoilState(openStateModal)
  
    const closeModal = () => {
      setIsOpen(false)
    }
  
    return (
      <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-20" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
            </Transition.Child>
  
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-20"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 translate-y-20"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Comming Soon !
                    </Dialog.Title>
                    <div className="mt-2">
                      <Image src={Maintenance} width={400} height={240} placeholder="blur" alt="maintenance featured"/>
                    </div>
  
                    <div className="mt-4 flex items-center justify-center">
                      <button
                        type="button"
                        className="flex justify-center w-full rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Oke, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
    )
  }

  export default MyDialog