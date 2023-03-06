
import React from 'react';
import {useState } from 'react'

import { color, motion, useScroll, useSpring } from "framer-motion"
import { BsFillMoonStarsFill } from "react-icons/bs";
// import './../styles/individualfeatures.module.css'

// COMPONENTS
import Topbar from '@/components/Topbarmenu';
import Topbarmenu from '@/components/Topbarmenu';

type Props = {}
// import './../styles/individualfeatures.module.css';

export default function Header({}: Props) {

    const [darkMode, setDarkMode] = useState(false);
    
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
    return (

    <div className={darkMode ? "dark" : ""}>
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
            <h1 className="font-burtons text-xl">Shoes universe</h1>
            <Topbarmenu></Topbarmenu>
            <ul className="flex items-center">
              <li>
                {/* <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                /> */}
              </li>
              
              {/* <li>
                <a
                  className="bg-gradient-to-r from-white-gold text- to-white-gold text-white px-4 py-2 border-none rounded-md ml-8 hover:bg-black"
                  href=""
                >
                  Shoescart
                </a>
              </li> */}
            </ul>
          </motion.nav>
          </div>


)


}




