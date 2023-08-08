import Layouts from '@/components/layouts'
import { tglIndo } from '@/utils/index'
import Head from 'next/head'
import React from 'react'
import Image from "next/image";

export default function PostDetail({data}: any) {
  const {title, published, updated, author, content, labels} = data
  return (
    <Layouts>
        <Head>
            <title>{title} - @mnorsaputra</title>
        </Head>
        <header className='px-4'>
          <div className='my-4'>
            <span className="inline px-3 py-1 bg-green-800/90 text-white rounded-xl">{labels[0]}</span>
          </div>
          <h2 className='font-bold text-2xl'>{title}</h2>
          <div className="post_date my-4">
            <time className='published' dateTime={published}>{tglIndo(published)} - (<strong>Updated</strong>: {tglIndo(updated)})</time>
          </div>
          <div className="flex justify-start items-center space-x-2 my-4">
            <Image src={`https:${author.image.url}`} width={40} height={40} className="rounded-full" />
            <div className="text-dark font-bold">{author.displayName}</div>
          </div>
        </header>
        <article className="prose lg:prose-xl prose-slate dark:prose-invert prose-a:text-green-400 prose-a:outline-offset-3 prose-p:px-6 prose-headings:pl-5">
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </article>
    </Layouts>
  )
}

export async function getServerSideProps({params}:any) {
const {id}: any = params
  const resoureUrl = `https://www.googleapis.com/blogger/v3/blogs/${process.env.NEXT_PUBLIC_BLOG_ID}/posts/${id}?key=${process.env.NEXT_PUBLIC_BLOG_KEY}`
  const fetchApi = await (await fetch(resoureUrl)).json()
  return { 
    props: {
        data: fetchApi
    }
   }
}