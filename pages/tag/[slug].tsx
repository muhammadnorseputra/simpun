import Layouts from "@/components/layouts";
import Head from "next/head";
import { PostListLabel } from "@/components/blogs/PostList";
import { fetchImageId } from "@/utils/index";
import Labels from "@/components/blogs/Labels";

export default function Tags({ posts, slug }: any) {
    const {items} = posts
    return (
        <Layouts>
            <Head>
                <title>Tags - {slug}</title>
            </Head>
            <Labels isActive={slug}/>
            <PostListLabel posts={items}/>
        </Layouts>
    );
};
// This gets called on every request
export async function getServerSideProps({ params }: any) {
    // Fetch data from external API
    const { slug } = params
    const requests = await fetch(`${process.env.NEXT_PUBLIC_BLOG_URL}/blogs/${process.env.NEXT_PUBLIC_BLOG_ID}/posts/search?q=${slug}&key=${process.env.NEXT_PUBLIC_BLOG_KEY}&fetchBodies=false&fields=nextPageToken,items(id,url,labels,title,replies,published,author(displayName,url))`)
    const posts = await requests.json()
    // Pass featured to the page via props
    return { props: { posts, slug } }
  }