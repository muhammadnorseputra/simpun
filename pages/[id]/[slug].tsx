import Layouts from '@/components/layouts'
import { fetchComments, fetchImageId, intelligentlyTruncate, openInNewTab, scrolltoHash, tglIndo } from '@/utils/index'
import Head from 'next/head'
import React from 'react'
import Image from "next/image";
import { ChatAltIcon } from "@heroicons/react/outline";

export default function PostDetail({data, currentUrl, hostName, featuredImage, comments}: any) {
  const {title, published, updated, author, content, labels, url, replies} = data
  const {items: CommentList} = comments
  return (
    <Layouts>
        <Head>
            <title>{title} - @mnorsaputra</title>
            <meta name="title" content={`@mnorsaputra — ${title}`} />
            <meta name="description" content={intelligentlyTruncate(content, 200)} />
            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="article" />
            <meta property="og:url" content={`https://${hostName}${currentUrl}`} />
            <meta property="og:title" content={`@mnorsaputra — ${title}`} />
            <meta property="og:description" content={intelligentlyTruncate(content, 200)} />
            <meta property="og:image" content={featuredImage} />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={`https://${hostName}${currentUrl}`} />
            <meta property="twitter:title" content={`@mnorsaputra — ${title}`} />
            <meta property="twitter:description" content={intelligentlyTruncate(content, 200)} />
            <meta property="twitter:image" content={featuredImage} />

        </Head>
        <header className='px-4'>
          <div className='my-4'>
            <span className="inline px-3 py-1 bg-green-800/90 text-white rounded-xl">{labels[0]}</span>
          </div>
          <h2 className='font-bold text-2xl md:text-4xl'>{title}</h2>
          <div className="post_date my-6 text-sm md:text-base">
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
            className="relative p-2 bg-gray-100 hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full transition-colors duration-600"
          >
            <span className='absolute -top-2 -right-1 p-1 bg-red-500 rounded-full w-5 h-5 text-white text-xs leading-3'>{replies.totalItems}</span>
            <ChatAltIcon className="w-6 h-6 text-gray-500 focus:text-amber-200" />
          </button>
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
          <h3 className='font-bold text-xl mt-3 mb-5 relative'>Posting Komentar <span className='absolute top-2 right-1 p-1 bg-red-500 text-white text-center text-sm leading-3 rounded-full'>{replies.totalItems}</span></h3>
          <button type="button" onClick={() => openInNewTab(`${url}#comment`)} className='p-3 block w-full border border-black dark:border-gray-800 text-center text-slate-600 rounded-lg mb-6 hover:bg-slate-100 dark:hover:bg-slate-800'>Posting Komentar</button>
        </section>
        {replies.totalItems != 0 ? 
        <section id="listComments" className='px-4 my-6 border-t border-gray-100 dark:border-gray-800'>
          {CommentList.map((comment:any) => (
          <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
              <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                      <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                        <Image
                              className="mr-2 rounded-full bg-gray-200 dark:bg-black"
                              src={`https:${comment.author.image.url}`}
                              alt="Michael Gough" width={30} height={30}/>
                        <span className='ml-2'>{comment.author.displayName}</span> </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400"><time dateTime="2022-02-08"
                              title="February 8th, 2022">{tglIndo(comment.published)}</time></p>
                  </div>
              </footer>
              <p className="text-gray-500 dark:text-gray-400">
                {comment.content}
              </p>
              <div className="flex items-center mt-4 space-x-4">
                  <button type="button" onClick={() => openInNewTab(`${url}#comment`)}
                      className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                      <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                      Reply
                  </button>
              </div>
          </article>
          ))}
        </section>
        : ''
        }
        </footer>
    </Layouts>
  )
}

export async function getServerSideProps({params, res, req, resolvedUrl}:any,) {
  const {rawHeaders} = req
res.setHeader(
  'Cache-Control',
  'public, s-maxage=10, stale-while-revalidate=59'
)
const {id}: any = params
  const resoureUrl = `https://www.googleapis.com/blogger/v3/blogs/${process.env.NEXT_PUBLIC_BLOG_ID}/posts/${id}?key=${process.env.NEXT_PUBLIC_BLOG_KEY}`
  const fetchApi = await (await fetch(resoureUrl)).json()
  const featuredImage = await fetchImageId(id)
  const comments = await fetchComments(id)
  return { 
    props: {
        data: fetchApi,
        currentUrl: resolvedUrl,
        hostName: rawHeaders[1],
        featuredImage,
        comments
    }
   }
}