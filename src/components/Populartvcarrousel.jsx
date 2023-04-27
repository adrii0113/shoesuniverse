import { useState, useEffect } from "react"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import { color, motion, useScroll } from "framer-motion"



//api imports
import {getPopularSeries, getImagesFromAPI} from '@/api/apicall'

// css
import "pure-react-carousel/dist/react-carousel.es.css";

export default function Populartvcarrousel () {

    const [populartvshows,setPopulartvshows]  = useState([{}])
    

    useEffect(() => {

        const asingPopularShows = async () => {
            const recibedInfo = await getPopularSeries()
            setPopulartvshows(
                recibedInfo.slice(0,10)
            )
        }

        asingPopularShows()

        console.log(populartvshows)
    },[])


    

    return(

        <div className="2xl:mx-auto 1xl:container flex justify-center">
            {/* <button onClick={()=>getImagesFromAPI('/3FLHePl9Y3n4BidLVjIA9qSRDOE.jpg')}>SACAR IMGS</button> */}
            {/* <img src={()=>getImages()} alt="" /> */}
            <div className="px-1 py-12">
                {/* Carousel for Small-Sized Screen */}
                <CarouselProvider className="relative block sm:hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={1} step={1} infinite={true} naturalSlideHeight={2}>
                    <div className="js-flickity flex justify-center items-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <Slider>
                            <Slide index={0}>
                                <motion.div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}">
                                    <div className="relative w-full h-full lg:block hidden">
                                        <img src="https://i.ibb.co/VSsN4Jt/carousel-2.png" alt="sitting area" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            {/* <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1> */}
                                        </div>
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                        <img src="https://i.ibb.co/tMB5CZW/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-3-1.png" alt="sitting area" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            {/* <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1> */}
                                        </div>
                                    </div>
                                </motion.div>
                            </Slide>
                            
                        </Slider>
                        <ButtonNext role="button" aria-label="slide forward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for Medium and Large-Sized Screen */}
                <div>
                <h3 className="mt-0 mb-2 text-3xl font-medium leading-tight text-primary font-bebas">
                    Popular shows
                </h3>
                </div>
                <CarouselProvider className="relative hidden sm:block" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={1} step={1} infinite={true} currentSlide={1} naturalSlideHeight={2}>
                    <div className="js-flickity flex justify-center items-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <Slider className="carousel__sliderLarge">
                            {
                                populartvshows.map((populartvshow, index) => (
                                    <Slide className="carousel__inner-slideLarge" index={0} key={index}>
                                <motion.div className="gallery-cell w-full h-full" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                    <div className="relative w-full h-full lg:block hidden">
                                    <img src={`https://image.tmdb.org/t/p/original${populartvshow.poster_path}`} alt="sitting area" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            {/* <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">{populartvshow.name ?populartvshow.name: 'Movie undefined'}</h1> */}
                                        </div>
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                        <img src="https://i.ibb.co/tMB5CZW/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-3-1.png" alt="sitting area" className="object-center object-cover w-full h-full" />
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