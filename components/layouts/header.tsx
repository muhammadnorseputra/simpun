import {
    LightBulbIcon,
    CogIcon,
  } from "@heroicons/react/outline";
  
export default function Header() {
    return (
        <header>
          <div className="flex items-center justify-between p-4">
            {/* Logo */}
            <div className="flex justify-between items-center gap-x-5 divide-x divide-gray-200 text-2xl font-bold">
              <div>
                <span className="text-green-700">@</span>mnors
                <span className="text-green-700">a</span>putr
                <span className="text-green-700">a</span>
              </div>
            </div>
            {/* More */}
            <div>
            <button
                type="button"
                role="button"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-600"
              >
                <LightBulbIcon className="w-6 h-6 text-gray-500" />
              </button>
              <button
                type="button"
                role="button"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-600"
              >
                <CogIcon className="w-6 h-6 text-gray-500" />
              </button>
            </div>
          </div>
        </header>
    )
}