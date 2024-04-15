import {
    ArrowSmUpIcon, HeartIcon,
  } from "@heroicons/react/outline";
export default function Footer() {
    return (
        <footer>
          <div className="relative px-6 py-6 bg-gradient-to-r from-gray-50 to-gray-50 dark:from-slate-800 dark:to-slate-900 flex justify-between items-center border-t border-gray-100 dark:border-slate-800">
            <p className="text-gray-500 dark:text-white font-medium">
              Made with <HeartIcon className="w-4 h-4 fill-red-500 stroke-red-600 animate-pulse inline"/> @mnorsaputra
            </p>
          </div>
        </footer>
    )
} 