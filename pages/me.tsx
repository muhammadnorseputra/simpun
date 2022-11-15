import type { NextPage } from "next";
import Head from "next/head";
import Layouts from "@/components/layouts";
import HeroGlow from "@/components/heros/hero-glow";
import Skills from "@/components/skills/skills";
import Study from "@/components/studys/study";
import Cariers from "@/components/cariers/carier";
import Hobbys from "@/components/hobbys/hobby";
import Projects from "@/components/projects/project"


const Me: NextPage = ({ resource }: any) => {
  const { projects, studys, hobbys, carriers, me } = resource;
  return (
    <Layouts>
      <Head>
        <title>@mnorsaputra - portofolio</title>
        <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/favicons/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
        <link rel="manifest" href="/favicons/manifest.json"/>
        <meta name="msapplication-TileColor" content="#56A3A6"/>
        <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#56A3A6"/>
      </Head>
      <HeroGlow me={me}/>
      <Study studys={studys}/>
      <Cariers carriers={carriers}/>
      <Skills />
      <Projects projects={projects}/>
      <Hobbys hobbys={hobbys}/>
    </Layouts>    
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
