
import React from 'react';
import ReactPlayer from "react-player";
import {useState } from 'react'
import Link from 'next/link'

import { color, motion, useScroll, useSpring } from "framer-motion"
import { BsFillMoonStarsFill } from "react-icons/bs";
// import './../styles/individualfeatures.module.css'

// COMPONENTS
import Topbar from '@/components/Topbarmenu';
import Topbarmenu from '@/components/Topbarmenu';


// video & img


// import './../styles/individualfeatures.module.css';
// import {marioTrailer} from './../public/marioTrailer.mp4'

export default function Header() {

    const [darkMode, setDarkMode] = useState(false);
    
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
    return (

     
      
    <div className={darkMode ? "dark" : ""}>
      <section class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
    <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* <video class="min-w-full min-h-full absolute object-cover"   autoPlay muted loop>
          <source src={marioTrailer} type="video/mp4"/>
        </video> */}
        {/* <iframe width="2000" height="669" src="https://www.youtube.com/embed/LTFGH0rJ-EY" title="The Super Mario Bros. Movie - In Theaters Now (TV SPOT 66)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe> */}
        <ReactPlayer
          url={"https://www.youtube.com/embed/LTFGH0rJ-EY"}
          playing={true}
          width="100%"
          height="100%"
          loop={true}
          controls={false}
          volume={0}
        />
    </div>
    <div class="video-content space-y-2">
    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <Link href="../#" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                    </li>
                    <li>
                        <Link href="/Shop" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Movies</Link>
                    </li>
                   
                    <li>
                        <Link href="/featured" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Featured</Link>
                    </li>
                    
                    {/* <li>
                        <Link href="/contact" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">{user.email}</Link>
                    </li> */}

                    <li>
                    <button type="button" className="text-white bg-white-gold hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white-gold dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        
                        <Link href="/login">Log in</Link>
                        
                        </button>
                    </li>

                    <li>
                    <button type="button" className="text-white bg-white-gold hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white-gold dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    //  onClick={()=>initUserSession()}
                     >
                        <Link href="/register">Sign up</Link>
                     </button>
                    {/* <button onClick={()=>initUserSession()}>Sign up</button> */}
                    </li>

                    

                        {/* {user ? 
                            <button type="button" className="text-white bg-white-gold hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white-gold dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=> logOut()}>

                            Log out
                            </button>
                            
                            
                         : ""} */}

                    
                </ul>
            </div>
    </div>
</section>
      <motion.div
        
        className="progress-bar"
        style={{ scaleX, backgroundColor:"black", color:"black", position: "fixed", top: "0", left: "0", right: "0", height: "10px", background:"#ac8136 ", transformOrigin:"0%"}}
      />

      {/* <button >hola</button> */}
      
    <motion.div/>
    
    <motion.nav initial={{
            x: -500,
            opacity:0,
            scale:0.5,
          }}
          animate={{
            x:0,
            opacity:1,
            scale:1,
          }}
          transition={{
            duration:1.5,

          }}
          className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">movie finder</h1>
            <Topbarmenu></Topbarmenu>
            <ul className="flex items-center">
             
              
              
            </ul>
          </motion.nav>
         


          </div>

        
)


}




