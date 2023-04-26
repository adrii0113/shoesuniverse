
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

    return (

     
      
    <div className={darkMode ? "dark" : ""}>
      
      
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
          className="py-10 mb-12 flex justify-between dark:text-white ... sticky top-0">
            <h1 className="font-burtons text-xl">movie finder</h1>
            <Topbarmenu></Topbarmenu>
            <ul className="flex items-center">
             
              
              
            </ul>
          </motion.nav>
      
   

      <motion.div
        
        className="progress-bar"
        style={{ scaleX, backgroundColor:"black", color:"black", position: "fixed", top: "0", left: "0", right: "0", height: "10px", background:"#ac8136 ", transformOrigin:"0%"}}
      />

      {/* <button >hola</button> */}
      
    <motion.div/>
    

          </div>

        
)


}




