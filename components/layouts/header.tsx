import { LightBulbIcon, CogIcon, MoonIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import { useRecoilState } from 'recoil'
import { openStateModal } from 'atoms';
import MyDialog from 'components/modal';
import Link from "next/link";


export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useRecoilState(openStateModal)

  return (
    <>
    <header>
      <div className="flex items-center justify-between p-4 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-900/80">
        {/* Logo */}
        <Link href="/me">
        <div className="flex justify-between items-center gap-x-5 divide-x divide-gray-200 text-gray-800 dark:text-white text-2xl font-bold hover:cursor-pointer">
          <div>
            <span className="text-green-700 dark:text-green-300">@</span>mnors
            <span className="text-green-700 dark:text-green-300">a</span>putr
            <span className="text-green-700 dark:text-green-300">a</span>
          </div>
        </div>
        </Link>
        {/* More */}
        <div>
          {/* <button
            onClick={toggleAudio}
            type="button"
            role="button"
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors duration-600"
          >
            {isPlay 
            ? 
            <MusicNoteIcon className="w-6 h-6 text-gray-700 focus:text-blue-200 animate-pulse duration-1000 ease-linear" />
            :
            <VolumeOffIcon className="w-6 h-6 text-gray-500 focus:text-blue-200" />
            }
          </button> */}
          <button
            onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}
            type="button"
            role="button"
            className="p-2 mx-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors duration-600"
          >
            {theme === 'light' ? <MoonIcon className="w-6 h-6 text-gray-500 fill-slate-400"/> : <LightBulbIcon className="w-6 h-6 text-gray-500 stroke-amber-400 fill-amber-500" />}
          </button>
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            role="button"
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors duration-600"
          >
            <CogIcon className="w-6 h-6 text-gray-500 focus:text-amber-200" />
          </button>
        </div>
      </div>
    </header>
    <MyDialog/>
    </>
  );
}


