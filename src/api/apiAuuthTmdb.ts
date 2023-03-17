import axios from "axios";


const accesTokenUrl = `https://api.themoviedb.org/4/auth/access_token`
const userAccesToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjE3ZDljOGU2M2QxYjczZWM2NmYwZTgwMzA4MGY3NyIsInN1YiI6IjY0MGUzYjZhZTE4ZTNmMDg0MDNhN2Q2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aWwV4AIftz7mU01GJRBOJaef2COoej0OLnRD78dRZ50';
const apiKey = 'af17d9c8e63d1b73ec66f0e803080f77'

export const createAccesToken = () =>{

    const accesTokenUrl = `https://api.themoviedb.org/4/auth/access_token`


}



export const aproveAccesToken = () =>{


}



// export const createRequestToken = () =>{

//     const config = {
//         headers:{
//             'Content-Type':'application/json;charset=utf-8',
//             'Authorization': `Bearer ${userAccesToken}`
            
//         }
//     }
//     https://api.themoviedb.org/4/auth/request_token?api_key=af17d9c8e63d1b73ec66f0e803080f77&access_token=aWwV4AIftz7mU01GJRBOJaef2COoej0OLnRD78dRZ50
//     const requestTokenUrl = `https://api.themoviedb.org/4/auth/request_token?api_key=${apiKey}&access_token=aWwV4AIftz7mU01GJRBOJaef2COoej0OLnRD78dRZ50`


// }


// create v3 request token

export const createV3RequestToken = async () =>{

    const v3createRequestTokenUrl = `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`;
    var currentURL = window.location.href;
    
    const res = await axios.get(v3createRequestTokenUrl);
    
    // location.replace(`https://www.themoviedb.org/authenticate/${res.data.request_token}`);
    // window.location.href = `https://www.themoviedb.org/authenticate/${res.data.request_token}`
    window.open(`https://www.themoviedb.org/authenticate/${res.data.request_token}`);
    // window.location.href = currentURL
    


    return res.data.request_token;

}


// aprove request token 

export const aproveV3RequestToken = async (requestToken : string) =>{

    const config = {
        headers :{
            'Access-Control-Allow-Origin' : '*'
        }
    }
    const toAproveUrl = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://www.yourapp.com/approved`;

    axios.post(toAproveUrl, config);
}
// create session method 

export const createSession = async (requestToken : string) =>{


    const createSessionUrl = `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${requestToken}`

    const res = await axios.post(createSessionUrl)
    localStorage.setItem('tmdbsession_id', res.data.session_id)
    console.log(res.data.session_id)
    return res.data.session_id;


}

export const deleteSession = async () =>{

    const deleteSessionUrl = `https://api.themoviedb.org/3/authentication/session?api_key=${apiKey}`
    
}





module.exports = {
    createV3RequestToken,
    createSession,
    aproveV3RequestToken


}