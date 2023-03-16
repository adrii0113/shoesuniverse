
import React from "react";

// Hooks
import { useState, useEffect } from "react"

// Dependencies
import { color, motion, useScroll } from "framer-motion"

// Components
import Head from '@/components/Head';
import Header from '@/components/Header';
import Moviecarrousel from '@/components/Moviecarrousel';

// Functions
import { getExampleMovies, getTrendingContent } from "@/api/apicall"
import { createSession, createV3RequestToken, aproveV3RequestToken } from "@/api/apiAuuthTmdb"
import {getAccountDetails} from "@/api/apiaccountcalls"
// Auth imports


export default function Home() {
  

  const [movies,setMovies]  = useState([{}])
  const [session_id,setSession_id] = useState()

  useEffect(()=>{

    
    const initRequestToken = async () =>{
      const reqToken = await createV3RequestToken()
      // aproveV3RequestToken(reqToken);
      setTimeout(()=>{

        createSession(reqToken);
      },10000)
      console.log(reqToken)
      console.log(process.env.API_KEY)

    }
    initRequestToken()
   
    // getAccountDetails(JSON.stringify(localStorage.getItem('tmdbsession_id')))
    // const session = JSON.stringify(localStorage.getItem('tmdbsession_id')!)
    // console.log(session)

  })

  // useEffect(() => {
  //   const getMoviesFromApi = async () => {
  //     const recibedInfo = await getTrendingContent('all','day')
  //     setMovies(
  //       recibedInfo
  //     )
  //   }
  //   getMoviesFromApi();
  //   // console.log(movies)
  //   // movies.map((movie) =>{console.log(movie.title)})
    
  // }, []);


  return (
    <div className="dark">

      {/* HEAD */}
      <Head></Head>

      <main className=" bg-black-to-gray md:px-20 lg:px-40">
     

        <section className="min-h-screen">
          {/* HEADER */}
          <Header></Header>
          <Moviecarrousel movie={movies}/>
          <button onClick={()=>getAccountDetails()}>GET ACCOUNT DETAILS</button>
        </section>
        
      </main>
    
    </div>
  );
}