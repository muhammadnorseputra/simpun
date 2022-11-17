import {
    ArrowSmUpIcon, HeartIcon,
  } from "@heroicons/react/outline";
export default function Footer() {
    return (
        <footer>
          <div className="relative px-6 py-6 bg-gradient-to-b from-slate-700 to-slate-900 flex justify-between items-center border-t border-slate-800">
            <p className="text-white font-medium">
              Made with <HeartIcon className="w-4 h-4 fill-red-500 stroke-red-600 animate-pulse inline"/> @mnorsaputra
            </p>
            <button
              role="button"
              type="button"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="p-2 bg-slate-800 rounded-full group transition-all duration-700 shadow-sm"
            >
              <ArrowSmUpIcon className="w-6 h-6 text-slate-100 transition-all ease-out group-hover:text-slate-400 group-hover:fill-slate-600 origin-bottom group-hover:scale-110 group-hover:animate-bounce" />
            </button>
          </div>
        </footer>
    )
} 