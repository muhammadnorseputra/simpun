import { LightBulbIcon, CogIcon, MoonIcon, MusicNoteIcon, VolumeOffIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import { useRecoilState } from 'recoil'
import { openStateModal } from 'atoms';
import MyDialog from 'components/modal';
import Link from "next/link";
import useSound from "use-sound";
import { useEffect, useState } from "react";


export default function Header() {
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
  const [isOpen, setIsOpen] = useRecoilState(openStateModal)
  return (
    <>
    <header className="sticky top-0 z-50">
      <div className="flex items-center justify-between p-4 bg-[#16a34a] sm:bg-white dark:sm:bg-slate-900 dark:sm:bg-gradient-to-b dark:sm:from-slate-900 dark:sm:to-slate-900/70">
        {/* Logo */}
        <Link href="/me">
        <div className="flex justify-between items-center gap-x-5 divide-x divide-gray-200 text-white sm:text-gray-800 dark:text-white text-2xl font-bold hover:cursor-pointer">
          <div>
            #mnorsaputra
            <div className="text-xs m-0  p-0">Fullstack Web Developer</div>
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
            {theme === 'light' ? <MoonIcon className="w-4 h-4 sm:w-6 sm:h-6  group-hover:text-green-500 text-white sm:text-gray-500 fill-gray-100 sm:fill-slate-400"/> : <LightBulbIcon className="w-4 h-4 sm:w-6 sm:h-6  group-hover:text-green-500 text-gray-500 stroke-amber-400 fill-amber-500" />}
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


