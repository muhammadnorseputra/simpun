import Link from "next/link";

export default function Labels() {
    return (
        <div className="py-3 px-4 border-b border-gray-100 dark:border-slate-800 flex items-center justify-start mx-full hover:overflow-x-auto overflow-hidden space-x-4">
            <Link href="/"><button type="button" role='button' className="py-2 px-3 rounded-full bg-black dark:bg-green-800 text-white hover:bg-gray-800 whitespace-nowrap" data-aos="fade-left">Untuk Anda</button></Link>
            <Link href="/search/label/Blogger"><button type="button" role='button' className="py-2 px-3 rounded-full bg-gray-100  dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-slate-400" data-aos="fade-left">Blogger</button></Link>
        </div>
    )
}