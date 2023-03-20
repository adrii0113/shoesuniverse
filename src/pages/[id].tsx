import { useRouter } from "next/router";

export default function post(props: string) {

    const router = useRouter();
    console.log(router,'routes')

    return(

        <h2>post {router.query.id}</h2>

    )


}