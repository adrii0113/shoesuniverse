
type MovieProps = {

    title : string,
    released : string,
    runtime : string,
    genre : string,
    img : string,
    year : string


}
export default function Moviecard (props: MovieProps){

    return (

        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            
            <article className="overflow-hidden rounded-lg shadow-lg bg-white-gold">

                <a href="#">
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
                            Author Name
                        </p>
                    </a>
                    <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </a>
                </footer>

            </article>
            

        </div>

    )



}