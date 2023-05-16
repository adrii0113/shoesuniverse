import React, { useEffect, useState } from "react";

// Components
import Head from '@/components/Head';
import Header from '@/components/Header';


// api
import {multiSearch, getSimilarShows} from "@/api/apicall";

export default function (props) {



    const [movie,setMovie]  = useState({})
    const [similarMovies,setSimilarMovies]  = useState([{}])

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
            console.log(recibedInfo[0].id)
            setMovie(recibedInfo[0])
        }
        getInfoFromApi()
        
        // getSimilarMoviesFromApi()

    },[])


    useEffect(() =>{
        
            const getSimilarMoviesFromApi =  async () => {

                const recibedInfo = await getSimilarShows(movie.media_type, movie.id)
                setSimilarMovies(recibedInfo.slice(0,10))
                console.log(recibedInfo.slice(0,10))
            }
            getSimilarMoviesFromApi()
          

          
    },[movie])
    return (


        <div>
            <Head></Head>

            <main className="bg-black-to-gray md:px-20 lg:px-17">

                {/* HEADER */}
                <Header></Header>

                <section className="min-h-screen">

                    <div className="movie-info flex flex-wrap w-full">

                        <div className="movie-image">

                            <img class="rounded-t-lg h-auto max-w-md" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                            
                        </div>


                        <div className="movie-description w-full text-center">
                            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white-gold md:text-5xl lg:text-6xl dark:text-white text-center">{movie.original_name || movie.original_title}</h1>


                            <p className="movie-descriptionText mb-3 text-gray-500 dark:text-gray-400">
                                {movie.overview}
                            </p>
                        </div>


                        <div className="similar-movies">
                            {
                                similarMovies.map((movie, index) =>(
                                    <div key={index}>
                                        {movie.name}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    
                    
                </section>

            <button className="bg-white" onClick={test}>Hola</button>
            </main>
            
        </div>


    )



}