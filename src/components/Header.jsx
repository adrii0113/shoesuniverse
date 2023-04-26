
import React from 'react';
import ReactPlayer from "react-player";
import {useState } from 'react'
import Link from 'next/link'
import { findDOMNode } from 'react-dom'

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


    // react player functions
    const [fullscreenMode, setFullscreenMode] = useState(false)
    let player = null;
    const ref = (p) => {player = p;}
    const onStart = () => {
      if (fullscreenMode)
          findDOMNode(player).requestFullscreen().catch(
              (err) => 
              {console.log("no se pudo")}
          );
  }
  const onEnded = () => {
    setFullscreenMode(document.fullscreenElement !== null);
}

    return (

     
      
    <div className={darkMode ? "dark" : ""}>
      
      <section class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-10">
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
        {/* <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden"> */}
        {/* <video class="min-w-full min-h-full absolute object-cover"   autoPlay muted loop>
          <source src={marioTrailer} type="video/mp4"/>
        </video> */}
        {/* <iframe width="2000" height="669" src="https://www.youtube.com/embed/LTFGH0rJ-EY" title="The Super Mario Bros. Movie - In Theaters Now (TV SPOT 66)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe> */}
        {/* <ReactPlayer
          url={"https://www.youtube.com/embed/LTFGH0rJ-EY"}
          playing={true}
          width="100%"
          height="100%"
          loop={true}
          controls={false}
          volume={0}
          onStart={onStart}
            onEnded={onEnded}
        /> */}
        {/* <video autoplay muted loop playsinline>
          <source src="https://www.youtube.com/embed/LTFGH0rJ-EY" type="video/mp4"/>
        </video> */}
    {/* </div> */}
    <div class="video-content space-y-2">
      
    
    </div>
</section>
      <motion.div
        
        className="progress-bar"
        style={{ scaleX, backgroundColor:"black", color:"black", position: "fixed", top: "0", left: "0", right: "0", height: "10px", background:"#ac8136 ", transformOrigin:"0%"}}
      />

      {/* <button >hola</button> */}
      
    <motion.div/>
    
    
         


          </div>

        
)


}




