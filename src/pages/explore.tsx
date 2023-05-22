
import Head from '@/components/Head';
import Header from '@/components/Header';
import ExploreComponet from '@/components/elements/explore/Explore';
export default function Explore(){


    return(

        <div>
            <Head></Head>
            <main className="bg-black-to-gray md:px-20 lg:px-17">

                <section className="min-h-screen">

                    {/* HEADER */}
                    <Header></Header>
                    <article>
                        <ExploreComponet></ExploreComponet>
                        
                    </article>
                </section>





</main>
        </div>

    )

}