import { useEffect, useState } from "react"
type MovieProps = {

    title : string,
    actors : string,
    awards: string,
    country: string,
    director: string,
    language: string,
    metascore: string,
    plot: string,
    production: string,
    rated: string,
    ratings : string[],
    released : string,
    type: string,
    writer: string,
    imdbID: string,
    imdbRating: string,
    runtime : string,
    genre : string,
    img : string,
    year : string


}

function hola (){console.log("A")}
import React from 'react';
import Moviemodal from './Moviemodal';
export default function Moviecard (props: MovieProps){
    const [showModal, setShowModal] = React.useState(false);

    useEffect(() => {
        // setShowModal(false)
        console.log(showModal)
      }, []);

    function hola(){
        console.log('áa')
        setShowModal(false)
        console.log(showModal)
    }
    return (
        
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" onClick={() => setShowModal(true)}>

            
            <article className="overflow-hidden rounded-lg shadow-lg bg-white-gold"  >

                <a type="button"
                >
               
        
      
        
                    <img alt="Placeholder" className="block h-auto w-full" src={props.img}></img>
     
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black-to-gray" href="#">
                            { props.title }
                        </a>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        { props.runtime }
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-white" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"></img>
                        <p className="ml-2 text-sm">
                            {props.director}
                        </p>
                    </a>
                    <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart">{props.genre}</i>
                    </a>
                </footer>

            </article>
            
            {
            showModal ? (
                <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold bg-white-gold">
                    {props.title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => hola()}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {props.plot}
                  </p>
                </div>
                {/* MOVIE DETAILED INFO */}
                <div className="relative p-6 flex-auto border-t border-solid border-slate-200 rounded-b">
                    <h2 className="bg-slate-900">Actors</h2>
                    <p className="bg-slate-900">{props.actors}</p>
                </div>
                <div className="relative p-6 flex-auto border-t border-solid border-slate-200 rounded-b">
                    <h2 className="bg-slate-900">Rating</h2>
                    <p className="bg-slate-900">{props.imdbRating}</p>
                </div>
                <div className="relative p-6 flex-auto border-t border-solid border-slate-200 rounded-b">
                    <h2 className="bg-slate-900">Actors</h2>
                    <p className="bg-slate-900">{props.actors}</p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => hola()}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Watch in live
                
                  </button>
                </div>
              </div>
            </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ): null
            }

        </div>

)



}