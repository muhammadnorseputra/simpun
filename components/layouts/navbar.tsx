import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
    DotsCircleHorizontalIcon,
  } from "@heroicons/react/outline";
  
export default function Navbar() {
    return (
        <nav className="border-b-4 border-gray-200 sticky top-0 bg-white/80 backdrop-blur-lg z-20">
          <ul className="flex justify-between items-center">
            <li className="w-full text-center">
              <Link href="/me" passHref>
                <a className="block hover:bg-gray-100 rounded-t-2xl p-4 relative navigation-effect">
                  Up
                </a>
              </Link>
            </li>
            <li className="w-full text-center">
              <Link href="/me/#cariers" passHref scroll={false}>
                <a className="block hover:bg-gray-100 rounded-t-2xl p-4 relative navigation-effect">
                  Cariers
                </a>
              </Link>
            </li>
            <li className="w-full text-center">
              <Link href="/me/#skills" passHref scroll={false}>
                <a className="block hover:bg-gray-100 rounded-t-2xl p-4 relative navigation-effect">
                  Skills
                </a>
              </Link>
            </li>
            <li className="w-full text-center">
              <Link href="/me/#projects" passHref scroll={false}>
                <a className="block hover:bg-gray-100 rounded-t-2xl p-4 relative navigation-effect">
                  Projects
                </a>
              </Link>
            </li>
            <li className="w-full text-center">
              <Menu as="div" className="relative inline-block">
                <Menu.Button className="flex items-center justify-center gap-x-1 md:gap-x-2 hover:bg-gray-100 rounded-t-2xl p-4 relative navigation-effect">
                  <DotsCircleHorizontalIcon className="w-6 h-6 text-gray-400" />{" "}
                  More{" "}
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-2 mt-2 pb-1 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-600"
                              : "text-gray-900"
                          } group relative flex w-full items-center p-4 navigation-effect`}
                        >
                          Certificates
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-600"
                              : "text-gray-900"
                          } group relative flex w-full items-center p-4 navigation-effect`}
                        >
                          Blog
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
          </ul>
        </nav>
    )
}