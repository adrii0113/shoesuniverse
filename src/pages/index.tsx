
import React from "react";

import { color, motion, useScroll } from "framer-motion"

import deved from "../public/dev-ed-wave.png";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

// Components
import Head from '@/components/Head';
import Header from '@/components/Header';



// import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import individualfeatures from '@/styles/individualfeatures.module.css';
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const {scrollYProgress} = useScroll();
  return (
    <div className="dark">

      {/* HEAD */}
      <Head></Head>

      <main className=" bg-black-to-gray md:px-20 lg:px-40">
     

        <section className="min-h-screen">
          {/* HEADER */}
          <Header></Header>

        </section>

    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        
      </main>
    
    </div>
  );
}