import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/layouts/header";
import Navbar from "../components/layouts/navbar";
import Skills from "../components/skills/skills";
import Projects from "../components/projects/project"
import Hobbys from "../components/hobbys/hobby";
import Footer from "../components/layouts/footer";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto max-w-full md:max-w-xl">
      <div className="bg-white min-h-screen shadow-3xl">
        <Head>
          <title>@mnorsaputra - portofolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* ---- Header ---- */}
        <Header />

        {/* ---- Navigasi ---- */}
        <Navbar />

        {/* ---- Hero ---- */}
        {/* <HeroGlow /> */}

        {/* ---- Studys ---- */}
        {/* <Study /> */}

        {/* ---- Cariers ---- */}
        {/* <Cariers /> */}

        {/* ---- Skill ---- */}
        {/* <Skills /> */}

        {/* ---- Project ---- */}
        <Projects/>
        
        {/* ---- Hobby ---- */}
        {/* <Hobbys/> */}

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
