import axios from "axios";



export const getAccountDetails = async () =>{

    

    const tmdbsession_id = JSON.stringify(localStorage.getItem('tmdbsession_id')). replace(/[ '"]+/g, ' ').trim();
    const url = `https://api.themoviedb.org/3/account?api_key=${process.env.API_KEY}&session_id=${tmdbsession_id}`

    const res = await axios.get(url)

    console.log(res.data)


}


module.exports = {

    getAccountDetails
}