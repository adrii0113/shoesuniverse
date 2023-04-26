
import React from "react";

// Hooks
import { useState, useEffect } from "react"

// Dependencies
import { color, motion, useScroll } from "framer-motion"

// Components
import Head from '@/components/Head';
import Header from '@/components/Header';
import Moviecarrousel from '@/components/Moviecarrousel';
import Populartvcarrousel from '@/components/Populartvcarrousel';
import Footer from "@/components/Footer";
// Functions
import { getExampleMovies, getTrendingContent } from "@/api/apicall"
import {getAccountDetails} from "@/api/apiaccountcalls"

// Auth imports
import { createSession, createV3RequestToken, aproveV3RequestToken } from "@/api/apiAuuthTmdb"

import YouTube, { YouTubeProps } from 'react-youtube';


export default function Home() {
  

  const [movies,setMovies]  = useState([{}])


  // useEffect(()=>{

    
  //   const initRequestToken = async () =>{
  //     const reqToken = await createV3RequestToken()
  //     // aproveV3RequestToken(reqToken);
  //     setTimeout(()=>{

  //       createSession(reqToken);
  //     },10000)
  //     console.log(reqToken)
  //     console.log(process.env.API_KEY)

  //   }
  //   initRequestToken()
   
  

  // })
  function Example() {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  
    const opts: YouTubeProps['opts'] = {
      height: '390',
      width: '640',
      playerVars: {
       // https://www.youtube.com/watch?v=5iiF_hxhLB4
        autoplay: 1,
      },
    };
  
    return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />;
  }

 


  return (
    <div className="dark">

      {/* HEAD */}
      <Head></Head>

      <main className=" bg-black-to-gray md:px-20 lg:px-17">
     
          <Header></Header>

        <section className="min-h-screen">
          {/* HEADER */}
          <Moviecarrousel/>
          <Populartvcarrousel/>
          <button onClick={()=>getAccountDetails()}>GET ACCOUNT DETAILS</button>
          
        </section>
        
        <Footer></Footer>
      </main>
    
    </div>
  );
}