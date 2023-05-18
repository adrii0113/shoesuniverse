
// import './../../../styles/Mostratedmovies.module.css'
// import './Mostratedmovies.module.css'
import { useState, useEffect } from "react"
import { useRouter } from 'next/router';
// api calls
import {getTopRatedMovies, getEscpecificShow, getImages} from "@/api/apicall"
import { backOut } from "framer-motion"

export default function Mostratedmovies (){

    const router = useRouter();

    const [breakingbad,setBreakingBad]  = useState({})
    const [breakingbadimage,setBreakingBadimage] = useState()

    const [bettercallsaul,setBetterCallsaul] = useState({})
    const [bettercallsaulImage,setBetterCallSaulimage] = useState()

    useEffect(() => {

        const asignMovies = async () => {
            const breakingbadInfo = await getEscpecificShow('Breaking bad')
            const movieImages = await getImages('tv',breakingbadInfo[0].id)
            console.log(breakingbadInfo[0])
            console.log(movieImages[1].file_path)
            const image = `https://image.tmdb.org/t/p/original${movieImages[13].file_path}`
            setBreakingBadimage(image)

            setBreakingBad(breakingbadInfo[0])


            const bettercallsauldInfo = await getEscpecificShow('Better Call Saul')
            const movieImages2 = await getImages('tv',bettercallsauldInfo[0].id)
            console.log(bettercallsauldInfo[0])
            console.log(movieImages2[1].file_path)
            const image2 = `https://image.tmdb.org/t/p/original${movieImages2[1].file_path}`
            setBetterCallSaulimage(image2)

            setBetterCallsaul(bettercallsauldInfo[0])



        }


        asignMovies()
        
    },[])


    const handleClick = (e) => {
        // e.preventDefault();
        
        const movieName = e.target.parentElement.parentElement.firstChild.innerHTML
        const movie = {name: movieName}
        router.push({
            pathname: '/movieinfo',
            query: { data: movie.name}
        })
        console.log(movie)

      };

    return (
        
        
            <section className="content">
            
                {
                <main className="card" style={{ backgroundImage: "url(" + breakingbadimage + ")"}}>
                    <div className="breaking-bad">
                        {/* <div className="nav">
                            <ul>
                                <li>Share</li>
                                <li className="facebook"><i className="fa fa-facebook"></i></li>
                                <li className="twitter"><i className="fa fa-twitter"></i></li>
                                <li><i className="fa fa-ellipsis-v"></i></li>
                            </ul>
                        </div> */}
                        <h1 className="title">{breakingbad.original_name}</h1>
                        {/* <ul className="meta">
                            <li>9.5/10</li>
                            <li>TV Series</li>
                            <li>Crime, Drama, Thriller</li>
                        </ul> */}
                        <p className="description">{breakingbad.overview}</p>
                        {/* <hr className="break" /> */}
                        <div className="bottom-info"><button onClick={handleClick} className="watch">View more</button><a className="plus">+</a><a className="add-to">Add to Watchlist</a></div>
                    </div>
                </main>
                }

                <main className="card" style={{ backgroundImage: "url(" + bettercallsaulImage + ")"}}>
                    <div className="breaking-bad">
                        {/* <div className="nav">
                            <ul>
                                <li>Share</li>
                                <li className="facebook"><i className="fa fa-facebook"></i></li>
                                <li className="twitter"><i className="fa fa-twitter"></i></li>
                                <li><i className="fa fa-ellipsis-v"></i></li>
                            </ul>
                        </div> */}
                        <h1 className="title">{bettercallsaul.original_name}</h1>
                        {/* <ul className="meta">
                            <li>9.5/10</li>
                            <li>TV Series</li>
                            <li>Crime, Drama, Thriller</li>
                        </ul> */}
                        <p className="description">{bettercallsaul.overview}</p>
                        <hr className="break" />
                        <div className="bottom-info"><a className="watch">Watch Trailer</a><a className="plus">+</a><a className="add-to">Add to Watchlist</a></div>
                    </div>
                </main>
            </section>
       



    ) 


}