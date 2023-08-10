import Layouts from "@/components/layouts";
import type { NextPage } from "next";
import Head from "next/head";
import {ArrowsExpandIcon} from "@heroicons/react/outline";
import { useState } from "react";
import Labels from "@/components/blogs/labels";
import FeaturedPost from "@/components/blogs/FeaturedPost";
import PostList from "@/components/blogs/PostList";

const Blogs: NextPage = ({ featured: {items}, postlist }: any) => {
  
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
    <FeaturedPost item={items[0]}/>
    <Labels/>
    <PostList posts={posts}/>
    <div className="flex justify-center items-center mb-5">
    <button onClick={async () => {
      setBtnDisabled(true);setBtnText("Processing ...")
     const newPosts: any = await getNewPostsFromApi();
     setPosts([...posts, ...newPosts]);
  }} className="bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:bg-gray-100 text-gray-800 dark:text-gray-300 font-semibold py-2 px-4 rounded inline-flex items-center disabled:cursor-not-allowed" type="button" disabled={btnDisabled}>
    {btnDisabled ? '' : <ArrowsExpandIcon className="w-4 h-4 text-gray-500 dark:text-amber-500 mr-2"/>} {btnText}
    </button>
    </div>
  </Layouts>
  );
};

// This gets called on every request
export async function getServerSideProps({ req, res }: any) {
  // Fetch data from external API
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const response = await fetch(`${process.env.NEXT_PUBLIC_BLOG_URL}/blogs/${process.env.NEXT_PUBLIC_BLOG_ID}/posts?fields=items(id,title,labels,url,published,images(url),replies(totalItems),author(displayName,url,image(url)))&fetchBodies=true&fetchImages=true&maxResults=1&status=live&key=${process.env.NEXT_PUBLIC_BLOG_KEY}`)
  const postList = await fetch(`${process.env.NEXT_PUBLIC_BLOG_URL}/blogs/${process.env.NEXT_PUBLIC_BLOG_ID}/posts?fields=nextPageToken,items(id,title,labels,url,published,images(url),replies(totalItems),author(displayName,url))&fetchBodies=true&fetchImages=true&maxResults=5&status=live&key=${process.env.NEXT_PUBLIC_BLOG_KEY}`)
  const featured = await response.json()
  const postlist = await postList.json()
  // Pass featured to the page via props
  return { props: { featured, postlist } }
}

export default Blogs;
