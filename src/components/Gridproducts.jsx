import React from "react";
// hooks
import { useEffect, useState } from "react"
import axios from "axios";
// COMPONENTS
import Searchbar from "./Searchbar"
import Moviecard from "./Moviecard";
import Moviemodal from "./Moviemodal";
import Inforcard from "./Infocard";
// api call
import { getMovieByTitle, getDataByType,multiSearch } from "@/api/apicall";
// import { Console } from "console";

export default function Gridproducts () {
    // hooks
    const [count, setCount] = useState(0);
    // products
    const [movies, setMovies] = useState([{}])

    // get products data from api and set it accordingly
    const storeMovies = async (title) => {

        // const res = await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=1d90c95a`)
        // const res = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=af17d9c8e63d1b73ec66f0e803080f77&query=${title}`)
        const res = await multiSearch(title)
        console.log(res)
        setMovies(
            res
        )
    }

  
    useEffect(() => {
        console.log(movies.length)
      }, [movies]);

    
   
    return (
        
        <div className="container my-12 mx-auto px-4 md:px-12">
        {/* <h2>Movie/series finder</h2> */}
        <div className="-mx-20 lg:-mx-14">

        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-white-gold from-black-to-gray">Movie finder</span> Type your movie here</h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"></p>
        </div>

        {/* <button onClick={() => {getDataByType('series', 'titan')}}>test</button>
        <select name="" id="">
            <option value="">Movie</option>
            <option value="">Serie</option>
        </select> */}

           
    {/* INIT SEARCHBAR */}
    <form className="reflex items-center -mx-20 lg:-mx-20">   
        <label htmlFor="voice-search" className="sr-only">Search</label>
        <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>
        <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search movies,series..." required onChange={(value) => storeMovies(value.target.value)}></input>
        
        
    </div>
    {/* <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-white-gold rounded-lg border border-white-gold hover:bg-white-gold focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white-gold dark:hover:bg-white-gold dark:focus:ring-white-gold">
        <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
    </button> */}
        </form>
    {/* END SEARCHBAR */}
    
    <div className="flex flex-wrap -mx-20 lg:-mx-20">
        
        {
            movies.length > 1 ?
            
            movies.map((movie, index) =>(
                

                <div key={index} class="max-w-sm bg-white   rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2 my-2">
                    <a href="#">
                        <img class="rounded-t-lg" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title || movie.name}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.overview}</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                

            ))
            :null
        }
    {/* <Moviemodal></Moviemodal> */}
        {/* {
            
                

                     movies.Response === 'True'?<Moviecard 
                     title={movies.Title} 
                     released={movies.Released} 
                     runtime={movies.Runtime} 
                     genre={movies.Genre} 
                     img={movies.Poster} 
                     year={movies.Year} 
                     actors={movies.Actors}
                     plot={movies.Plot} 
                     awards={movies.Awards}
                     country={movies.Country}
                     director={movies.Director}
                     language={movies.Language}
                     metascore={movies.Metascore}
                     production={movies.Production}
                     rated={movies.Rated}
                     ratings={movies.Ratings}
                     writer={movies.Writer}
                     imdbRating={movies.imdbRating}
                     type={movies.Type}
                     

                    />
                    : null 
        } */}
 
        

        


        



        


        
        


      
        


        
        

    </div>
</div>
    )
}