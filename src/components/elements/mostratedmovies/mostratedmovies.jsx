
// import './../../../styles/Mostratedmovies.module.css'
// import './Mostratedmovies.module.css'
import { useState, useEffect } from "react"

// api calls
import {getTopRatedMovies, getEscpecificShow, getImages} from "@/api/apicall"
import { backOut } from "framer-motion"

export default function Mostratedmovies (){


    const [breakingbad,setBreakingBad]  = useState({})
    const [breakingbadimage,setBreakingBadimage] = useState()
    useEffect(() => {

        const asignMovies = async () => {
            const breakingbadInfo = await getEscpecificShow('Breaking bad')
            const movieImages = await getImages('tv',breakingbadInfo[0].id)
            console.log(breakingbadInfo[0])
            console.log(movieImages[1].file_path)
            const image = `https://image.tmdb.org/t/p/original${movieImages[1].file_path}`
            setBreakingBadimage(image)

            setBreakingBad(breakingbadInfo[0])
        }


        asignMovies()
        
    },[])

    return (
        
        
            <section className="content">
            
                {
                <main className="card" style={{ backgroundImage: "url(" + breakingbadimage + ")"}}>
                    <div className="breaking-bad">
                        <div className="nav">
                            <ul>
                                <li>Share</li>
                                <li className="facebook"><i className="fa fa-facebook"></i></li>
                                <li className="twitter"><i className="fa fa-twitter"></i></li>
                                <li><i className="fa fa-ellipsis-v"></i></li>
                            </ul>
                        </div>
                        <h1 className="title">{breakingbad.original_name}</h1>
                        <ul className="meta">
                            <li>9.5/10</li>
                            <li>TV Series</li>
                            <li>Crime, Drama, Thriller</li>
                        </ul>
                        <p className="description">A chemisty teacher diagnosed with a terminal lung cancer teams up with his former student to cook and sell crystal meth.</p>
                        <hr className="break" />
                        <div className="bottom-info"><a className="watch">Watch Trailer</a><a className="plus">+</a><a className="add-to">Add to Watchlist</a><span className="add-meta">546 of your friends have watched this</span></div>
                    </div>
                </main>
                }

                <main className="card">
                    <div className="breaking-bad">
                        <div className="nav">
                            <ul>
                                <li>Share</li>
                                <li className="facebook"><i className="fa fa-facebook"></i></li>
                                <li className="twitter"><i className="fa fa-twitter"></i></li>
                                <li><i className="fa fa-ellipsis-v"></i></li>
                            </ul>
                        </div>
                        <h1 className="title">Breaking Bad</h1>
                        <ul className="meta">
                            <li>9.5/10</li>
                            <li>TV Series</li>
                            <li>Crime, Drama, Thriller</li>
                        </ul>
                        <p className="description">A chemisty teacher diagnosed with a terminal lung cancer teams up with his former student to cook and sell crystal meth.</p>
                        <hr className="break" />
                        <div className="bottom-info"><a className="watch">Watch Trailer</a><a className="plus">+</a><a className="add-to">Add to Watchlist</a><span className="add-meta">546 of your friends have watched this</span></div>
                    </div>
                </main>
            </section>
       



    ) 


}