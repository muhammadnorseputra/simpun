import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/layouts/header";
import Navbar from "@/components/layouts/navbar";
import HeroGlow from "@/components/heros/hero-glow";
import Skills from "@/components/skills/skills";
import Study from "@/components/studys/study";
import Cariers from "@/components/cariers/carier";
import Hobbys from "@/components/hobbys/hobby";
import Projects from "@/components/projects/project"
import Footer from "@/components/layouts/footer";

const Me: NextPage = ({ resource }: any) => {
  const { projects, studys, hobbys, carriers, me } = resource;
  return (
    <div className="container mx-auto max-w-full md:max-w-xl md:shadow-2xl">
      <div className="bg-white dark:bg-slate-500 min-h-screen shadow-3xl">
        <Head>
          <title>@mnorsaputra - portofolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header/>
        <Navbar />
        <HeroGlow me={me}/>
        <Study studys={studys}/>
        <Cariers carriers={carriers}/>
        <Skills />
        <Projects projects={projects}/>
        <Hobbys hobbys={hobbys}/>
        <Footer />
      </div>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps({ req }: any) {
  const isSpalshScreen = req.cookies.splashscreen
  if(isSpalshScreen === 'false' || isSpalshScreen === undefined) {
    return {
      redirect: {
        permanent: true,
        destination: '/',
      },
    };
  }
  // Fetch data from external API
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/db.json`)
  const resource = await response.json()
  // Pass resource to the page via props
  return { props: { resource } }
}

export default Me;
