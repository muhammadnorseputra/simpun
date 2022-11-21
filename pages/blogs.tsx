import Layouts from "@/components/layouts";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Maintenance from '../public/maintenance.png'

const Blogs: NextPage = () => {
  return (
  <Layouts>
    <Head>
      <title>@mnorsaputra - Blogs</title>
    </Head>
    <div className="flex flex-1 flex-col items-center justify-center h-screen">
        <Image src={Maintenance} width={400} height={240} placeholder="blur" alt="maintenance featured"/>
        <h3 className="text-black dark:text-white font-bold text-xl">"Blog" UNDER MAINTENANCE</h3>
    </div>
  </Layouts>
  );
};

export default Blogs;
