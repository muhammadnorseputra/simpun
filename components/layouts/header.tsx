import { LightBulbIcon, CogIcon, MoonIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header>
      <div className="flex items-center justify-between p-4 dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900">
        {/* Logo */}
        <div className="flex justify-between items-center gap-x-5 divide-x divide-gray-200 text-2xl font-bold">
          <div>
            <span className="text-green-700 dark:text-green-300">@</span>mnors
            <span className="text-green-700 dark:text-green-300">a</span>putr
            <span className="text-green-700 dark:text-green-300">a</span>
          </div>
        </div>
        {/* More */}
        <div>
          <button
            onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}
            type="button"
            role="button"
            className="p-2 mr-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors duration-600"
          >
            {theme === 'light' ? <MoonIcon className="w-6 h-6 text-gray-500 fill-slate-400"/> : <LightBulbIcon className="w-6 h-6 text-gray-500 stroke-amber-200 fill-amber-500" />}
          </button>
          <button
            type="button"
            role="button"
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors duration-600"
          >
            <CogIcon className="w-6 h-6 text-gray-500" />
          </button>
        </div>
      </div>
    </header>
  );
}
