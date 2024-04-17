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

import project from '@/data/me/projects.json'
import study from '@/data/me/studys.json'
import hobby from '@/data/me/hobbys.json'
import carrier from '@/data/me/carriers.json'
import my from '@/data/me/me.json'
import HeroGrid from "@/components/heros/hero-grid";

const Me: NextPage = () => {
  return (
    <Layouts>
      <Head>
        <title>@mnorsaputra - Me</title>
      </Head>
      <HeroGrid my={my}/>
      <Study studys={study}/>
      <Cariers carriers={carrier}/>
      <Skills />
      <Projects projects={project}/>
      <Hobbys hobbys={hobby}/>
      <Contacts/>
    </Layouts>    
  );
};


export default Me;
