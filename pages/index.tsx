import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/layouts/header";
import Navbar from "../components/layouts/navbar";
import HeroGlow from "../components/heros/hero-glow";
import Skills from "../components/skills/skills";
import Study from "../components/studys/study";
import Cariers from "../components/cariers/carier";
import Hobbys from "../components/hobbys/hobby";
import Projects from "../components/projects/project"
import Footer from "../components/layouts/footer";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto max-w-full md:max-w-xl">
      <div className="bg-white min-h-screen shadow-3xl">
        <Head>
          <title>@mnorsaputra - portofolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <Navbar />
        <HeroGlow />
        <Study />
        <Cariers />
        <Skills />
        <Projects/>
        <Hobbys/>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
