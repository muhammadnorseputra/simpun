import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import {
  ArrowSmUpIcon,
    DotsCircleHorizontalIcon, HomeIcon,
  } from "@heroicons/react/outline";
  
export default function Navbar() {
  const [showButton, setShowButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true); // State baru untuk visibilitas navbar

  const controlButtonVisibility = () => {
    if (typeof window !== "undefined") {
      // Mendeteksi posisi scroll saat ini lebih besar dari posisi scroll sebelumnya (scroll ke bawah)
      if (window.scrollY < 100) {
        setShowButton(false); // Sembunyikan tombol
      } else {
        setShowButton(true); // Tampilkan tombol
      }

      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }


      // Memperbarui posisi scroll terakhir
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlButtonVisibility);

      return () => {
        window.removeEventListener("scroll", controlButtonVisibility);
      };
    }
  }, [lastScrollY]);
    return (
        <nav className={`border-b-4 py-2 dark:border-amber-500 sm:border-gray-200 dark:sm:border-gray-800 sticky bottom-0 bg-white/80 dark:bg-slate-900/70 backdrop-blur-lg z-20 duration-500 ${navbarVisible ? 'translate-y-0' : 'translate-y-full'}`}>
          <ul className="flex justify-center items-center align-middle ml-3">
            <li className="text-center">
              <Link href="/me" passHref>
                <a className="block hover:bg-gray-100 self-center dark:hover:bg-black/40 rounded-xl px-4 py-3 relative navigation-effect">
                  <HomeIcon className="w-6 h-6 text-gray-600 dark:text-amber-500"/>
                </a>
              </Link>
            </li>
            <li className="w-full text-center">
              <Link href="/me/#cariers" passHref scroll={false}>
                <a className="block hover:bg-gray-100 self-center dark:hover:bg-black/40 rounded-xl px-4 py-3 relative navigation-effect">
                  Cariers
                </a>
              </Link>
            </li>
            <li className="w-full text-center">
              <Link href="/me/#skills" passHref scroll={false}>
                <a className="block hover:bg-gray-100 self-center dark:hover:bg-black/40 rounded-xl px-4 py-3 relative navigation-effect">
                  Skills
                </a>
              </Link>
            </li>
            <li className="w-full text-center">
              <Link href="/me/#projects" passHref scroll={false}>
                <a className="block hover:bg-gray-100 self-center dark:hover:bg-black/40 rounded-xl px-4 py-3 relative navigation-effect">
                  Projects
                </a>
              </Link>
            </li>
            <li className="w-full text-center">
              <Menu as="div" className="relative inline-block">
              <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 bottom-0 z-10 origin-bottom-right mt-2 pb-1 w-56 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
                    <Menu.Item>
                      {({ active }) => (
                        <Link href="/certificates" legacyBehavior={false}>
                          <button
                            className={`${
                              active
                                ? "bg-gray-100 text-gray-600"
                                : "text-gray-900"
                            } group relative flex w-full items-center p-4`}
                          >
                            Certificates
                          </button>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link href="/blogs" legacyBehavior={false}>
                          <button
                            className={`${
                              active
                                ? "bg-gray-100 text-gray-600"
                                : "text-gray-900"
                            } group relative flex w-full items-center p-4`}
                          >
                            Blog
                          </button>
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
                <Menu.Button className="flex items-center justify-center gap-x-1 md:gap-x-2 hover:bg-gray-100 dark:hover:bg-black/40 rounded-xl px-4 py-3 relative navigation-effect">
                  <DotsCircleHorizontalIcon className="w-6 h-6 text-gray-400" />{" "}
                  More{" "}
                </Menu.Button>
                
              </Menu>
            </li>
          </ul>
          
          <button
              role="button"
              type="button"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className={`p-2 bg-white dark:bg-slate-800 rounded-full group shadow absolute -top-16 right-5 transition-all duration-300 ${showButton ? 'opacity-100' : 'opacity-0 -translate-y-5 pointer-events-none'}`}
            >
              <ArrowSmUpIcon className="w-6 h-6 text-gray-600 dark:text-slate-100 transition-all ease-out group-hover:text-slate-400 group-hover:fill-slate-600 origin-bottom group-hover:scale-110" />
            </button>
        </nav>
    )
}