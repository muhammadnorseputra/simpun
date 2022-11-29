import type { NextPage } from "next";
import Head from "next/head";
import Layouts from "@/components/layouts";
import HeroGlow from "@/components/heros/hero-glow";
import Skills from "@/components/skills/skills";
import Study from "@/components/studys/study";
import Cariers from "@/components/cariers/carier";
import Hobbys from "@/components/hobbys/hobby";
import Projects from "@/components/projects/project"
import Contacts from "@/components/contacts";


const Me: NextPage = ({ resource }: any) => {
  const { projects, studys, hobbys, carriers, me } = resource;
  return (
    <Layouts>
      <Head>
        <title>@mnorsaputra - Me</title>
      </Head>
      <HeroGlow me={me}/>
      <Study studys={studys}/>
      <Cariers carriers={carriers}/>
      <Skills />
      <Projects projects={projects}/>
      <Hobbys hobbys={hobbys}/>
      <Contacts/>
    </Layouts>    
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/muhammadnorseputra/simpun-api/db`)
  const resource = await response.json()
  // Pass resource to the page via props
  return { props: { resource } }
}

export default Me;
