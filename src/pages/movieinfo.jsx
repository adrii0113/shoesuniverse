import React, { useEffect, useState } from "react";

// Components
import Head from '@/components/Head';
import Header from '@/components/Header';



// api
import {multiSearch, getSimilarShows, getCredits} from "@/api/apicall";


  
  

 

export default function Movieinfo (props) {
    
    const [movie,setMovie]  = useState({})
    const [similarMovies,setSimilarMovies]  = useState([{}])
    const [credits,setCredits] = useState([{}])
    
 
   
   
    
    const test = (e) => {
        
    //     const data = JSON.parse(props.router.query.data);
    //    console.log(data)
       let params = new URLSearchParams(location.search);
       var name = params.get('data')
       console.log(name)
    };

    

    
    useEffect(() => {

        // take movie/show name from url
        let params = new URLSearchParams(location.search);
        var name = params.get('data')
        // function to search info of request movie to the api

        const getInfoFromApi = async () => {
            const recibedInfo = await multiSearch(name)
            console.log(recibedInfo[0])
            setMovie(recibedInfo[0])
        }
        getInfoFromApi()
        
        // getSimilarMoviesFromApi()

    },[])


    useEffect(() =>{
        
            const getSimilarMoviesFromApi =  async () => {

                const recibedInfo = await getSimilarShows(movie.media_type, movie.id)
                const creditsFromApo = await getCredits(movie.media_type,movie.id)
                setSimilarMovies(recibedInfo.slice(0,9))
                setCredits(creditsFromApo.cast.slice(0,10))
                console.log(recibedInfo.slice(0,10))
            }
            getSimilarMoviesFromApi()
          
            
          
    },[movie])





    const getcreditsFromApi = async () => {

        console.log(credits)
        
    }
    return (


        <div>
            <Head></Head>

            <main className="bg-black-to-gray md:px-20 lg:px-17">

                {/* HEADER */}
                <Header></Header>

                <section className="min-h-screen">
                {/* style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movie.poster_path})`}} */}
                    <div className="movie-info flex flex-wrap w-full" >

                        <div className="movie-image w-1/5">

                            <img class="rounded-t-lg h-auto max-w-md" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                            
                        </div>


                        <div className="movie-description w-4/5 text-center pl-48">
                            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white-gold md:text-5xl lg:text-6xl dark:text-white text-center">{movie.original_name || movie.original_title}</h1>


                            <p className="movie-descriptionText mb-3 text-gray-500 dark:text-gray-400">
                                {movie.overview}
                            </p>


                            <div className="movie-score">


                                <div class="flex justify-between mb-1">
                                 <span class="text-base font-medium text-white-gold dark:text-white">Rating</span>
                                <span class="text-sm font-medium text-white-gold dark:text-white">{((movie.vote_average)) + "/10"}</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div class="bg-white-gold h-2.5 rounded-full " style={ {width: "" + (movie.vote_average * 10)+ "%" +""}} ></div> 
                                </div> 


                            </div>
                            <div className="similar-movies flex flex-wrap">
                                <h2 className="w-full text-left">Similar movies</h2>
                               



                            {
                                similarMovies.map((movie, index) =>(
                                    
                                    <div key={index} className="similar-movies-container  border-solid border-2 border-white-gold rounded overflow-hidden">
                                        <img class="rounded-t-lg w-16 " src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="actorPic" />
                                        {movie.name||movie.original_title}
                                    </div>
                                    
                                ))

                                
                            }
                                <h2 className="w-full text-left">Cast</h2>
                            {
                                <div className="credits-list flex space-x-4 w-2/5">

                                    {credits.map((credit, index) =>(
                                        <div key={index} className="actor border-solid border-2 border-white-gold rounded">
                                            <img class="rounded-t-lg w-20 lg:w-25" src={`https://image.tmdb.org/t/p/original${credit.profile_path}`} alt="actorPic" />
                                            {credit.original_name}
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>

                        </div>


                        
                    </div>
                    
<div id="default-carousel" class="relative w-full" data-carousel="slide">
    
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
        </div>
      
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
        </div>
    </div>

    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
   
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

                    
                </section>

            <button className="bg-white" onClick={getcreditsFromApi}>Hola</button>
            </main>
            
        </div>


    )



}