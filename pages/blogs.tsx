import Layouts from "@/components/layouts";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Maintenance from '../public/maintenance.png'
import { tglIndo, toBase64 } from "../utils";
import {UserCircleIcon, LinkIcon, ArrowsExpandIcon} from "@heroicons/react/outline";
import Shimmer from "@/components/loadings/shimmer";
import { useState } from "react";
import Link from "next/link";
import slugify from "@sindresorhus/slugify";

const Blogs: NextPage = ({ featured: {items}, postlist }: any) => {
  const { id: FeaturedId, images, title, author, labels, published: date } = items[0]
  const { items: data, nextPageToken } = postlist
  const [posts, setPosts]: any = useState(data);
  const [PageToken, setPageToken]: any = useState(nextPageToken);
  const [btnText, setBtnText] = useState("Load More");
  const [btnDisabled, setBtnDisabled] = useState(false);

  
  async function getNewPostsFromApi() {
    const fetch_post = await fetch(`${process.env.NEXT_PUBLIC_BLOG_URL}/blogs/${process.env.NEXT_PUBLIC_BLOG_ID}/posts?fields=nextPageToken,items(id,title,labels,url,published,images(url),replies(totalItems),author(displayName,url,image(url)))&pageToken=${PageToken}&fetchBodies=true&fetchImages=true&maxResults=8&status=live&key=${process.env.NEXT_PUBLIC_BLOG_KEY}`)
    const postsData = await fetch_post.json()
    setPageToken(postsData.nextPageToken)
    setBtnText("Load More")
    setBtnDisabled(false)
    return {items}=postsData;
  }

  return (
  <Layouts>
    <Head>
      <title>@mnorsaputra - Blogs</title>
    </Head>
    <div className="relative overflow-hidden group">
        <div className="relative">
        <Image src={images[0].url} layout="intrinsic" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(Shimmer(110, 110))}`} className="transition-all group-hover:scale-110" width={600} height={340} alt={`${title}`}/>
        </div>
        <div className="absolute bottom-1 w-full px-8 pt-16 pb-6 bg-gradient-to-t dark:from-black/90 from-black/90">
          <div className="inline px-3 py-1 bg-green-800/90 text-sm text-white rounded-l-xl">{labels}</div> <span className="text-white font-bold">{tglIndo(date)}</span>
          <h2 className="text-white dark:text-white font-bold text-2xl my-2 transition-all hover:text-green-500 line-clamp-2"><Link href={`${FeaturedId}/${slugify(title)}`}>{title}</Link></h2>
          <div className="flex justify-start space-x-2 mt-4">
            <Image src={`https:${author.image.url}`} width={30} height={30} className="rounded-full" />
            <div className="text-white">{author.displayName}</div>
          </div>
        </div>
    </div>
    {posts.slice(1).map((post:any) => (
    <article key={post.id} className="mx-8 my-6 relative overflow-hidden group">
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-start items-start space-y-2 w-9/12 pr-5">
          <div className="flex justify-start items-center space-x-2">
            <div className="px-3 py-1 bg-slate-800/50 text-sm text-white rounded-l-xl">{post.labels[0]}</div> 
            <span className="text-slate-500 dark:text-slate-700 text-sm">{tglIndo(post.published)}</span>
          </div>
          
          <h2 className="font-bold text-md text-slate-600 dark:text-slate-800 dark:hover:text-green-500 hover:text-green-500 line-clamp-2">
            <Link href={`${post.id}/${slugify(post.title)}`}>{post.title}</Link>
          </h2>
          <div className="text-sm text-slate-500 flex justify-start items-center space-x-1"> <UserCircleIcon className="w-6 h-6 text-gray-500 dark:text-amber-500"/> <span className="dark:text-slate-700"> {author.displayName}</span></div>
        </div>
        <div className="relative">
        <Image layout="intrinsic" width="110" height="110"
            objectFit="cover" src={`${post.images[0].url}`} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(Shimmer(110, 110))}`}  className="transition-all rounded-xl group-hover:opacity-50 group-hover:blur-sm" />
          <Link href={`${post.id}/${slugify(post.title)}`}><div className="transition-all absolute top-[calc(35%)] left-[40%] hidden hover:scale-110 group-hover:block  p-2 rounded-full bg-white cursor-pointer">
            <LinkIcon className="w-4 h-4 text-green-600 dark:text-amber-500"/>
          </div></Link>
        </div>
      </div>
    </article>
    ))}
    <div className="flex justify-center items-center mb-5">
    <button onClick={async () => {
      setBtnDisabled(true);setBtnText("Processing ...")
     const newPosts: any = await getNewPostsFromApi();
     setPosts([...posts, ...newPosts]);
  }} className="bg-slate-200 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center" type="button" disabled={btnDisabled}>
    {btnDisabled ? '' : <ArrowsExpandIcon className="w-4 h-4 text-gray-500 dark:text-amber-500 mr-2"/>} {btnText}
    </button>
    </div>
  </Layouts>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const response = await fetch(`${process.env.NEXT_PUBLIC_BLOG_URL}/blogs/${process.env.NEXT_PUBLIC_BLOG_ID}/posts?fields=items(id,title,labels,url,published,images(url),replies(totalItems),author(displayName,url,image(url)))&fetchBodies=true&fetchImages=true&maxResults=1&status=live&key=${process.env.NEXT_PUBLIC_BLOG_KEY}`)
  const postList = await fetch(`${process.env.NEXT_PUBLIC_BLOG_URL}/blogs/${process.env.NEXT_PUBLIC_BLOG_ID}/posts?fields=nextPageToken,items(id,title,labels,url,published,images(url),replies(totalItems),author(displayName,url))&fetchBodies=true&fetchImages=true&maxResults=8&status=live&key=${process.env.NEXT_PUBLIC_BLOG_KEY}`)
  const featured = await response.json()
  const postlist = await postList.json()
  // Pass featured to the page via props
  return { props: { featured, postlist } }
}

export default Blogs;
