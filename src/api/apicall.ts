    import axios from "axios";

    // OMDB API
    export const getMovieByTitle =  async (title: String) => {
        
        const  response = await fetch (`http://www.omdbapi.com/?t=${title}&apikey=1d90c95a`)
        .then(response => response.json())
        // .then(response => console.log(response))
        .catch(err => console.error(err));
        // console.log(response)
        return response;
    }

    export const getDataByType = async (type: string, title: string) =>{

        const res = await axios.get(`http://www.omdbapi.com/?type=${type}?t=${title}&apikey=1d90c95a`)
        console.log(res.data)
        return res.data
    }

    export const getExampleMovies = async () =>{

        const res = await axios.get(`http://www.omdbapi.com/?s=movie&apikey=1d90c95a&page=88`)
        return res.data
    }


    // TMDB API
    const apiKey = 'af17d9c8e63d1b73ec66f0e803080f77'
    // This function return all the audivisual content that now a days is on trend
    export const getTrendingContent  = async (media_type: string, time_window: string) =>{

        const baseUrl = `https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=${apiKey}`
        const res = await  axios.get(baseUrl)
        return res.data.results;

    }


    // This function get a url path .jpg and returns the img

    export const getImagesFromAPI = async (url : string) => {

        const baseUrl = `https://image.tmdb.org/t/p/original${url}`
        const res = await axios.get(baseUrl);
        // console.log(res)
        return res.data;
    }
    



    module.exports = {
        getMovieByTitle,
        getDataByType,
        getExampleMovies,
        getTrendingContent,
        getImagesFromAPI
    }
  