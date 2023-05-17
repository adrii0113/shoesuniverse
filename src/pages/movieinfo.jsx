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

                    <div className="movie-info flex flex-wrap w-full">

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
                            <div className="similar-movies flex space-x-4 flex-wrap">
                                <h2 className="w-full text-left">Similar movies</h2>
                            {
                                similarMovies.map((movie, index) =>(
                                    
                                    <div key={index} className="similar-movies-container border-solid pb-10">
                                        <img class="rounded-t-lg h-auto w-20 lg:w-25" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="actorPic" />
                                        {movie.name||movie.original_title}
                                    </div>
                                ))

                                
                            }
                                <h2 className="w-full text-left">Cast</h2>
                            {
                                <div className="credits-list flex space-x-4 w-5/5">

                                    {credits.map((credit, index) =>(
                                        <div key={index} className="actor ">
                                            <img class="rounded-t-lg h-auto w-20 lg:w-25" src={`https://image.tmdb.org/t/p/original${credit.profile_path}`} alt="actorPic" />
                                            {credit.original_name}
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>

                        </div>


                        
                    </div>
                    
                    
                </section>

            <button className="bg-white" onClick={getcreditsFromApi}>Hola</button>
            </main>
            
        </div>


    )



}