'use client'

import { LightBulbIcon, CogIcon, MoonIcon, MusicNoteIcon, VolumeOffIcon, ArrowLeftIcon, BookmarkAltIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import { useRecoilState } from 'recoil'
import { openStateModal } from 'atoms';
import MyDialog from 'components/modal';
import Link from "next/link";
import useSound from "use-sound";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { cn } from "@/utils/cn";


export default function Header() {
  // auto hide header
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true); // State baru untuk visibilitas navbar

  const controlButtonVisibility = () => {
    if (typeof window !== "undefined") {

      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
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


  // MUSIK
  const [play, { stop }] = useSound('./musik/One-Direction-Right-Now-Audio.mp3', {
    autoplay: false,
    loop: true,
    forceSoundEnabled: true,
    soundEnabled: true,
    interrupt: false,
    volume: 0.50
  })

  const [isPlay, setIsPlay] = useState(false)
  // Fungsi untuk mengganti status play
  const togglePlay = () => {
    setIsPlay(!isPlay);
    if (!isPlay) {
      play();
    } else {
      stop();
    }
  };

  useEffect(() => {
    if (isPlay) {
      play();
    } else {
      stop();
    }
  }, [isPlay]);
  
  const { theme, setTheme } = useTheme();
  let isTheme = theme === 'light' ? <MoonIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white sm:text-gray-500 group-hover:text-green-500"/> : <LightBulbIcon className="w-4 h-4 sm:w-6 sm:h-6  group-hover:text-green-500 text-gray-500 stroke-amber-400 fill-amber-500" />

  const [isOpen, setIsOpen] = useRecoilState(openStateModal)
  const router = useRouter()

  const isBack = router.pathname === '/[id]/[slug]'
  return (
    
    <>
    <header className="sticky top-0 z-30">
      <div className={cn(`flex items-center justify-between px-4 py-2 sm:p-4 bg-[#16a34a] sm:bg-white dark:sm:bg-slate-900 dark:sm:bg-gradient-to-b dark:sm:from-slate-900 dark:sm:to-slate-900/70 duration-500`, headerVisible ? 'translate-y-0' : '-translate-y-full')}>
        {/* Logo */}
        <Link href="/me">
        <div className="flex justify-between items-center text-white sm:text-gray-800 dark:text-white text-md sm:text-2xl font-bold hover:cursor-pointer">
          {isBack && (<div className="border-r border-gray-200 pr-2 mr-3">
          <button
            onClick={() => router.back()}
            type="button"
            role="button"
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors duration-600 group"
          >
            <ArrowLeftIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white sm:text-gray-500 dark:text-white group-hover:text-green-500 focus:text-blue-200"/>
          </button>
          </div>)
          }
          <div>
            #mnorsaputra
            <div className="text-[9px] sm:text-xs m-0 p-0">Fullstack Web Developer</div>
          </div>
        </div>
        </Link>
        {/* More */}
        <div>
          <button
            onClick={() => togglePlay()}
            type="button"
            role="button"
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors duration-600 group"
          >
            {isPlay 
            ? 
            <MusicNoteIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white sm:text-gray-500 dark:text-white group-hover:text-green-500 focus:text-blue-200 animate-pulse duration-1000 ease-linear" />
            :
            <VolumeOffIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white sm:text-gray-500 dark:text-white group-hover:text-green-500 focus:text-blue-200" />
            }
          </button>
          <button
            onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}
            type="button"
            role="button"
            className="p-2 mx-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors duration-600 group"
          >
            {isTheme}
          </button>
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            role="button"
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors duration-600 group"
          >
            <CogIcon className="w-4 h-4 sm:w-6 sm:h-6 group-hover:text-green-500 text-white sm:text-gray-500 focus:text-amber-200" />
          </button>
        </div>
      </div>
    </header>
    <MyDialog/>
    </>
  );
}


