
import React from "react";
import { useState, useEffect } from "react"
import { color, motion, useScroll } from "framer-motion"

// Components
import Head from '@/components/Head';
import Header from '@/components/Header';

import { getExampleMovies, getTrendingContent } from "@/api/apicall";


import styles from '@/styles/Home.module.css'

import Moviecarrousel from '@/components/Moviecarrousel';
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  

  const [movies,setMovies]  = useState([{}])
 

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

        </section>

    

      {/* {
        <ul>
        {movies.map((movie) => (
          // <li key={movie.id}> {movie}</li>
          // <li key={movie.id}>{movie.name}</li>
          <li>{movie.title}</li>
        ))}
      </ul>
      } */}
    
        
      </main>
    
    </div>
  );
}