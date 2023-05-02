
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

     // grab nav mobile menu items
     const btn = document.querySelector(".mobile-menu-button");
     const menu = document.querySelector(".mobile-menu");
     const btnHandler = () => {
      menu.classList.toggle("hidden");
    }
   

    return (

     
      
    <div className={darkMode ? "dark" : ""}>
      
      
      {/* <motion.nav initial={{
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
          </motion.nav> */}
         <nav class="bg-black-to-gray mb-10 py-10">
			    <div class=" mx-auto px-4">
				    <div class="flex justify-between">
					<div class="flex space-x-7">
						<div>
						
							<a href="#" class="flex items-center py-4 px-2">
								<img src="logo.png" alt="Logo" class="h-8 w-8 mr-2"></img>
								<span class="font-semibold text-gray-500 text-lg">Navigation</span>
							</a>
						</div>
					
						<div class="hidden md:flex items-center space-x-1">
							<a href="" class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</a>
							<a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Services</a>
							<a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</a>
							<a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Us</a>
						</div>
					</div>
			
					<div class="hidden md:flex items-center space-x-3 ">
						<a href="" class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</a>
						<a href="" class="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</a>
					</div>
					
					<div class="md:hidden flex items-center">
						<button onClick={()=>btnHandler()} class="outline-none mobile-menu-button">
						<svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			
			<div class="hidden mobile-menu">
				<ul class="">
					<li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
					<li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div>
			
		</nav>
      
   

      <motion.div
        
        className="progress-bar"
        style={{ scaleX, backgroundColor:"black", color:"black", position: "fixed", top: "0", left: "0", right: "0", height: "10px", background:"#ac8136 ", transformOrigin:"0%"}}
      />

      {/* <button >hola</button> */}
      
    <motion.div/>
    

          </div>

        
)


}




