import { color, motion, useScroll } from "framer-motion"
import { useState, useEffect } from "react"
import axios from "axios";

import { getAllMovies } from "@/api/apicall"
import { setInterval } from "timers";


import {AiOutlineStar} from 'react-icons/ai'

export default function Explore(){



    // window.addEventListener("load", function(event) {
    //     document.querySelector('[data-dropdown-toggle="dropdown"]').click();
    //   });

    const [movies,setMovies] = useState([{}])
    const [loading, setLoading] = useState(true)
    const moviesTemp = [];
    const [counter,setCounter] = useState(1)


    const [selected, setSelected] = useState('movie');

    const showLoading = () => (
        setLoading(true)
    )

    const hideLoading = () => (
        setLoading(false)
    )

    useEffect(() => {
        console.log(loading)
    }, [loading])
    
   
    const incrementPageCount = () =>{
        setCounter
    }


    const handleClick = (value) =>{

        setSelected(value)
        console.log(selected)
    }


    useEffect(() => {
        const getMoviesFromApi = async () => {
          const recibedInfo = await getAllMovies(selected,counter)
          setMovies(
            recibedInfo.slice(0,10)
          )
        }

        // const getMovieImages = async () => {
        //     const recibedInfo = await getImagesFromAPI(movies.poster_path)
        //     setMovieImages(
        //       recibedInfo
        //     )
        //   }
        
        getMoviesFromApi();
        
        
       
      }, [counter,selected]);


    useEffect(() => {
        movies.map((movie)=>{
            
            // movie.map((moviex)=>{
            //     console.log(moviex)
            // })
            console.log(movie)
        })


       
        
    },[movies])

    return (

        <div>
            
            <select name="Category" id="" value={selected}>
            <option value="" selected >Choose a drink</option>
                <option value="movie" onClick={(e) => handleClick(e.target.value)}>Movie</option>
                <option value="tv" onClick={(e) => handleClick(e.target.value)}>Serie</option>
            </select>

            <div className="flex flex-wrap justify-center">

            {
               
                    movies.map((movie,index)=>(


                    
                         <div className="px-2 " key={index}>
      
                            <div class="max-w-sm rounded overflow-hidden shadow-lg mb-5 bg-gray-600">
                                    <img class="max-w-sm" src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt={movie.original_title} ></img>
                                    <div class="px-6 py-4">
                                        <div class="font-bold text-xl mb-2">{movie.original_title}</div>
                                        <p class=" text-base">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                    </div>
                                    <div class="px-6 pt-4 pb-2">
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{movie.vote_average}</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                                    </div>
                                </div>
                         </div>
                    

                    ))
                    
                
                
               
            
            
                }
                </div>

            <button onClick={()=>setCounter(counter + 1)}>Siguiente pag</button>
                <div className="flex justify-end">
                        <div class="flex justify-end">
                            <div class="flex flex-row mx-auto">
                                <button onClick={()=>setCounter(counter - 1)} type="button" class="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3">
                                <div class="flex flex-row align-middle">
                                    <svg class="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <p class="ml-2">Prev</p>
                                </div>
                                </button>
                                <button onClick={()=>setCounter(counter + 1)} type="button" class="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3">
                                <div class="flex flex-row align-middle">
                                    <span class="mr-2">Next</span>
                                    <svg class="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                </button>
                            </div>


                            </div>




            </div>
           
        </div>





    )

}