import { tglIndo, toBase64 } from "@/utils/index";
import Shimmer from "../loadings/shimmer";
import Image from "next/image";
import Link from "next/link";
import slugify from "@sindresorhus/slugify";
import {UserCircleIcon, LinkIcon, ChatAlt2Icon} from "@heroicons/react/outline";

export default function PostList({posts}: any) {
    return (
        posts.slice(1).map((post:any) => (
            <article key={post.id} className="mx-4 md:mx-6 my-6 relative overflow-hidden group">
              <div className="flex justify-between items-center">
                <div className="flex flex-col justify-start items-start space-y-2 w-9/12 pr-5">
                  <div className="flex justify-start items-center space-x-2">
                    <div className="px-3 py-1 bg-slate-800/50 text-sm text-white rounded-l-xl">{post.labels[0]}</div> 
                    <span className="text-slate-500 dark:text-slate-500 text-xs md:text-sm">{tglIndo(post.published)}</span>
                  </div>
                  
                  <h2 className="font-bold font-sans text-sm md:text-base text-slate-800 dark:text-slate-200 dark:hover:text-green-500 hover:text-green-500 line-clamp-2">
                    <Link href={`${post.id}/${slugify(post.title)}`}>{post.title}</Link>
                  </h2>
                  <div className="text-sm text-slate-500 flex justify-start items-center space-x-1"> 
                    <UserCircleIcon className="w-4 md:w-6 h-4 md:h-6 text-gray-300 dark:text-gray-700"/> <span className="dark:text-slate-300 first-letter:uppercase"> {post.author.displayName}</span>
                    <ChatAlt2Icon className="w-4 md:w-6 h-4 md:h-6 text-gray-300 dark:text-gray-700"/> <span className="dark:text-slate-300 first-letter:uppercase"> {post.replies.totalItems}</span>
                  </div>
                </div>
                <div className="relative">
                <Image layout="intrinsic" width="110" height="110"
                    objectFit="cover" src={`${post.images[0].url}`} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(Shimmer(110, 110))}`}  className="transition-all group-hover:opacity-50 group-hover:blur-sm" />
                  <Link href={`${post.id}/${slugify(post.title)}`}><div className="transition-all absolute top-[calc(35%)] left-[40%] hidden hover:scale-110 group-hover:block  p-2 rounded-full bg-white cursor-pointer">
                    <LinkIcon className="w-4 h-4 text-green-600 dark:text-green-500"/>
                  </div></Link>
                </div>
              </div>
            </article>
        ))
    )
}