import Link from 'next/link'

import { useState, useEffect,useContext } from "react"
import { AuthContext } from "@/modules/auth/context/authcontext";
import { useAuth } from "@/modules/auth/context/authcontext";
import { useRouter } from "next/router";
// api imports
import { createSession, createV3RequestToken, aproveV3RequestToken } from "@/api/apiAuuthTmdb"

export default function Topbarmenu (){


    const { user } = useContext(AuthContext);
    const { logOut } = useAuth();
    const initUserSession = async () => {
        const reqToken = await createV3RequestToken()

        setTimeout(()=>{
    
            createSession(reqToken);
          },10000)

          console.log(reqToken)
          console.log(process.env.API_KEY)
    }
   


    return(

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
                    
                    <li>
                        <Link href="/contact" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">{user.email}</Link>
                    </li>

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

                    

                        {user ? 
                            <button type="button" className="text-white bg-white-gold hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white-gold dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=> logOut()}>

                            Log out
                            </button>
                            
                            
                         : ""}

                    
                </ul>
            </div>
    )
}