import Layouts from '@/components/layouts'
import { openInNewTab, scrolltoHash, tglIndo } from '@/utils/index'
import Head from 'next/head'
import React from 'react'
import Image from "next/image";
import { ChatAltIcon } from "@heroicons/react/outline";

export default function PostDetail({data}: any) {
  const {title, published, updated, author, content, labels, url} = data
  return (
    <Layouts>
        <Head>
            <title>{title} - @mnorsaputra</title>
        </Head>
        <header className='px-4'>
          <div className='my-4'>
            <span className="inline px-3 py-1 bg-green-800/90 text-white rounded-xl">{labels[0]}</span>
          </div>
          <h2 className='font-bold text-2xl md:text-4xl'>{title}</h2>
          <div className="post_date my-6">
            <time className='published' dateTime={published}>{tglIndo(published)} - (<strong>Updated</strong>: {tglIndo(updated)})</time>
          </div>
          <div className="flex justify-between items-center space-x-2 pb-4 mt-6">
            <div className='inline-flex justify-start items-center space-x-4 first:uppercase'>
              <Image src={`https:${author.image.url}`} width={40} height={40} className="rounded-full" />
              <div className="text-dark font-bold">{author.displayName}</div>
            </div>
            <div className="ml-auto">
            <button
            onClick={() => scrolltoHash('comments')}
            type="button"
            role="button"
            className="p-2 bg-gray-100 hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-900 rounded-full transition-colors duration-600"
          ><ChatAltIcon className="w-6 h-6 text-gray-500 focus:text-amber-200" /></button>
            </div>
          </div>
        </header>
        <article className="selection:bg-green-300 selection:text-green-900 prose prose-table:border-y prose-table:border-gray-100 dark:prose-table:border-gray-800 prose-blockquote:pr-4 prose-li:pr-8 prose-a:no-underline hover:prose-a:underline prose-li:ml-4 lg:prose-xl prose-slate dark:prose-invert prose-a:text-green-400 prose-a:outline-offset-3 prose-p:px-6 prose-headings:pl-5">
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </article>
        <footer>
        <section id="author" className="my-3 py-6 border border-y border-x-0 border-gray-100 dark:border-gray-800 dark:bg-gray-800 px-6">
        <div className="flex flex-col justify-start items-start space-y-4">
            <Image src={`https:${author.image.url}`} width={80} height={80} className="rounded-full" />
            <div className="text-dark font-bold first-line:uppercase">{author.displayName}</div>
            <p className='text-gray-400 leading-6'>
            Perkenalkan saya seorang penulis dan personal desainer
            </p>
          </div>
        </section>
        <section id="comments" className="mx-4">
          <h3 className='font-bold text-xl mt-3 mb-5'>Posting Komentar</h3>
          <button type="button" onClick={() => openInNewTab(`${url}#comment`)} className='p-3 block w-full border border-black dark:border-gray-800 text-center text-slate-600 rounded-lg mb-6 hover:bg-slate-100 dark:hover:bg-slate-800'>Posting Komentar</button>
        </section>
        </footer>
    </Layouts>
  )
}

export async function getServerSideProps({params, res}:any,) {
res.setHeader(
  'Cache-Control',
  'public, s-maxage=10, stale-while-revalidate=59'
)
const {id}: any = params
  const resoureUrl = `https://www.googleapis.com/blogger/v3/blogs/${process.env.NEXT_PUBLIC_BLOG_ID}/posts/${id}?key=${process.env.NEXT_PUBLIC_BLOG_KEY}`
  const fetchApi = await (await fetch(resoureUrl)).json()
  return { 
    props: {
        data: fetchApi
    }
   }
}