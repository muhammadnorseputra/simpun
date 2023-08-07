import Layouts from '@/components/layouts'
import Head from 'next/head'
import React from 'react'

export default function PostDetail() {
  return (
    <Layouts>
        <Head>
            <title>Helo Detail</title>
        </Head>
        <h1>Halo Detail</h1>
    </Layouts>
  )
}

export async function getServerSideProps({params}:any) {
const {id}: any = params
  const resoureUrl = `https://www.googleapis.com/blogger/v3/blogs/${process.env.NEXT_PUBLIC_BLOG_ID}/posts/${id}?key=${process.env.NEXT_PUBLIC_BLOG_KEY}`
  const fetchApi = await (await fetch(resoureUrl)).json()
  console.log(fetchApi)
  return { 
    props: {
        data: null
    }
   }
}