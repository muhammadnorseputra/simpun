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
  const { project, study, hobby, carrier, my } = resource;
  return (
    <Layouts>
      <Head>
        <title>@mnorsaputra - Me</title>
      </Head>
      <HeroGlow my={my}/>
      <Study studys={study}/>
      <Cariers carriers={carrier}/>
      <Skills />
      <Projects projects={project}/>
      <Hobbys hobbys={hobby}/>
      <Contacts/>
    </Layouts>    
  );
};

// This gets called on every request
export async function getServerSideProps() {
  const [projects, studys, hobbys, carriers, me] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`), 
    fetch(`${process.env.NEXT_PUBLIC_BASE_API}/studys`),
    fetch(`${process.env.NEXT_PUBLIC_BASE_API}/hobbys`),
    fetch(`${process.env.NEXT_PUBLIC_BASE_API}/carriers`),
    fetch(`${process.env.NEXT_PUBLIC_BASE_API}/me`)
  ]);

  const [project, study, hobby, carrier, my] = await Promise.all([
    projects.json(), 
    studys.json(),
    hobbys.json(),
    carriers.json(),
    me.json()
  ]);

  const resource = {project, study, hobby, carrier, my}

  // Pass resource to the page via props
  return { props: { resource } }
}

export default Me;
