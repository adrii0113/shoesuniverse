import React from "react";

// Components
import Head from '@/components/Head';
import Header from '@/components/Header';
import Gridproducts from "@/components/Gridproducts";
import Searchbar from "@/components/Searchbar";


export default function Shop (){

    return (

        <div>
            <Head></Head>

            <main className="bg-black-to-gray md:px-20 lg:px-40">

                <section className="min-h-screen">

                    {/* HEADER */}
                    <Header></Header>
                    <article>
                        <h2>All our products</h2>
                            <Gridproducts></Gridproducts>
                    </article>
                </section>





            </main>
        </div>




    )


}

