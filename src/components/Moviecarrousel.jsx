import { useState, useEffect } from "react"
import { getExampleMovies, getTrendingContent, getImagesFromAPI } from "@/api/apicall";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import { color, motion, useScroll } from "framer-motion"
import "pure-react-carousel/dist/react-carousel.es.css";


import { useRouter } from 'next/router';

export default function Moviecarrousel (){

    
    const router = useRouter();
    const [movies,setMovies]  = useState([{}])
    const [movieImages,setMovieImages] = useState([{}]);

   
    useEffect(() => {
        const getMoviesFromApi = async () => {
          const recibedInfo = await getTrendingContent('movie','day')
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
        
        
       
      }, []);



      const handleClick = (e) => {
        // e.preventDefault();
        
        const movieName = e.target.alt
        const movie = {name: movieName}
        router.push({
            pathname: '/movieinfo',
            query: { data: movie.name}
        })
        // console.log(movie)

      };
    return (
        
        <div className="2xl:mx-auto 1xl:container flex justify-center">
            <div className="px-1 py-5">
                {/* Carousel for Small-Sized Screen */}
                <div>
                <h3 className="mt-0 mb-2 text-3xl leading-tight text-primary font-bebas">
                    Popular movies
                </h3>
                </div>
                <CarouselProvider className="relative block sm:hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={1} step={1} infinite={true} naturalSlideHeight={2}>
                    <div className="js-flickity flex justify-center items-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>

                        <Slider>
                            {

                            movies.map((movie, index)=>(
                                <Slide index={0} key={index}>
                                <motion.div className="px-1 lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}">
                                    <div className="relative w-full h-full lg:block hidden">
                                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} className="object-center object-fill w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            {/* <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1> */}
                                        </div>
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} className="object-center object-fill w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            {/* <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1> */}
                                        </div>
                                    </div>
                                </motion.div>
                            </Slide>
                            ))
                            
                            }
                            
                        </Slider>
                        <ButtonNext role="button" aria-label="slide forward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for Medium and Large-Sized Screen */}
                
                <CarouselProvider className="relative hidden sm:block" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={1} step={1} infinite={true} currentSlide={1} naturalSlideHeight={2}>
                    <div className="js-flickity flex justify-center items-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <Slider className="carousel__sliderLarge">
                            {
                                movies.map((movie, index) => (
                                    <Slide className="carousel__inner-slideLarge" index={0} key={index}>
                                        <motion.div className="gallery-cell w-full h-full" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                            <div className="relative w-full h-full lg:block hidden" onClick={handleClick}>
                                            <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt={movie.original_title} className="object-center object-fill w-full h-full" />
                                                <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                                    {/* <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">{movie.title ?movie.title: 'Movie undefined'}</h1> */}
                                                </div>
                                            </div>
                                            <div className="relative w-full h-full lg:hidden">
                                            <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt={movie.original_title} className="object-center object-fill w-full h-full" />
                                                <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                                    {/* <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1> */}
                                                </div>
                                            </div>
                                        </motion.div>
                            </Slide>
                            
                                )
                                )
                            }
                        </Slider>
                        <ButtonNext role="button" aria-label="slide forward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>

            <style>
                {`
                    .gallery-cell {
                        height: 386px;
                        padding-right:15px;
                    }
                    @media (min-width: 300px) and (max-width: 420px) {
                        .gallery-cell {
                            height: 286px !important;
                            
                        }
                    }
                    
                    @media (max-width: 640px) {
                        .gallery-cell {
                            padding-right:0;
                        }
                    }

                    .carousel__sliderLarge {
                        padding-left: 20%;
                        padding-right: 20%;
                    }

                    /* gives us the illusion of spaces between the slides */
                    .carousel__inner-slideLarge {
                        width: calc(100% - 20px);
                        height: calc(100% - 20px);
                        left: 10px;
                        top: 10px;
                        
                    }
                `}
            </style>
        </div>
    


    ) 
    
}