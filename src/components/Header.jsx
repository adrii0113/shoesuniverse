
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
import {logo} from './../public/movie-city.svg'

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
			    <div class=" mx-auto">
				    <div class="flex justify-between">
					<div class="flex space-x-7">
						<div>
		  				
							<Link href="#" class="flex items-center py-4 px-2">
								<img src="https://flowbite.com/docs/images/logo.svg" alt="" class="h-8 w-8 mr-2"></img>
								<span class="font-semibold text-gray-500 text-lg">Movie Finder</span>
							</Link>
						</div>
					
						<div class="hidden md:flex items-center space-x-1">
							<Link href="/" class="py-4 px-2 text-white-gold border-b-4 border-white-gold font-semibold ">Home</Link>
							<Link href="/Shop" class="py-4 px-2 text-gray-500 font-semibold hover:text-white-gold transition duration-300">Discover</Link>
							<Link href="/explore" class="py-4 px-2 text-gray-500 font-semibold hover:text-white-gold transition duration-300">Explore</Link>
							
						</div>
					</div>
			
					<div class="hidden md:flex items-center space-x-3 ">
						<Link href="/login" class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-white-gold hover:text-white transition duration-300">Log In</Link>
						<Link href="/register" class="py-2 px-2 font-medium text-white bg-white-gold rounded hover:bg-white-gold transition duration-300">Sign Up</Link>
					</div>
					
					<div class="md:hidden flex items-center">
						<button onClick={()=>btnHandler()} class="outline-none mobile-menu-button">
						<svg class=" w-6 h-6 text-gray-500 hover:text-white-gold"
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
					<li class="active"><Link href="/" class="block text-sm px-2 py-4 text-white bg-white-gold font-semibold">Home</Link></li>
					<li><Link href="/Shop" class="block text-sm px-2 py-4 hover:bg-white-gold transition duration-300">Discover</Link></li>
					<li><Link href="/explore" class="block text-sm px-2 py-4 hover:bg-white-gold transition duration-300">Explore</Link></li>
					<li><Link href="/contact" class="block text-sm px-2 py-4 hover:bg-white-gold transition duration-300">Contact Us</Link></li>
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




