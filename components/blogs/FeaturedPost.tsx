import { tglIndo, toBase64 } from "@/utils/index"
import Shimmer from "../loadings/shimmer"
import {ChatAlt2Icon} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import slugify from "@sindresorhus/slugify";

export default function FeaturedPost({item}: any) {
    const { id: FeaturedId, images, title, author, labels, published: date, replies } = item
    return (
        <div className="relative overflow-hidden group bg-gray-100 dark:bg-black">
            <div className="relative">
            <Image src={images[0].url} layout="intrinsic" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(Shimmer(110, 110))}`} className="transition-all group-hover:scale-110" width={600} height={360} alt={`${title}`}/>
            </div>
            <article className="absolute bottom-1 w-full px-6 pt-16 pb-6 bg-gradient-to-t from-black">
            <div className="inline px-3 py-1 bg-green-800/90 text-sm text-white rounded-l-xl">{labels}</div> <span className="text-white font-bold text-sm md:text-sm">{tglIndo(date)}</span>
            <h2 className="text-white dark:hover:text-green-500 font-bold text-xl md:text-2xl my-2 transition-all hover:text-green-500 hover:text- line-clamp-2"><Link href={`${FeaturedId}/${slugify(title)}`}>{title}</Link></h2>
            <div className="flex justify-start space-x-2 mt-4">
                <Image src={`https:${author.image.url}`} width={30} height={30} className="rounded-full" />
                <div className="text-white first-letter:uppercase">{author.displayName}</div>
                <ChatAlt2Icon className="w-6 h-6 text-white"/> <span className="text-white first-letter:uppercase"> {replies.totalItems}</span>
            </div>
            </article>
        </div>
    )
}