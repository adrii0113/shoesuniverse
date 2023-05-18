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

        const baseUrl = `https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=${process.env.API_KEY}`
        const res = await  axios.get(baseUrl)
        return res.data.results;

    }


    // This function get a url path .jpg and returns the img

    export const getImagesFromAPI = async (url : string) => {

        const baseUrl = `https://image.tmdb.org/t/p/original${url}`
        const res = await axios.get(baseUrl);
        console.log(res)
        return res.data;
    }



    // function return popular series

    export const getPopularSeries = async () => {

        const url = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`
        const res = await axios.get(url)

        return res.data.results;
    }


    // get all movies

    export const getAllMovies = async (number: number) => {

        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&page=${number}`
        const res = await axios.get(url)


        console.log(res.data)
        return res.data
    }

   
    
    // multi search, function to search for movies and tv shows
    export const multiSearch = async (query: String) => {

        const url =`https://api.themoviedb.org/3/search/multi?api_key=af17d9c8e63d1b73ec66f0e803080f77&query=${query}`
        const res = await axios.get(url)

        // console.log(res.data.results)
        return res.data.results
        
    }


    // get top rated movies
    export const getTopRatedMovies = async () => {
        const url =`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
        const res = await axios.get(url);

        // console.log(res.data.results)
        return res.data
    }



    // get upcoming movies



    export const getUpcomingMovies  = async (media_type: string, time_window: string) =>{

        // const baseUrl = `https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=${process.env.API_KEY}`


        const baseUrl  = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`
        const res = await  axios.get(baseUrl)
        return res.data.results;

    }



    // get a especific tv show

    export const getEscpecificShow = async (query: string) => {

        const baseUrl = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`

        const res = await axios.get(baseUrl)

        return res.data.results;

    }


    // get similar movies 

    export const getSimilarShows = async ( mediaType: number, query: string,) => {

        const baseUrl = `https://api.themoviedb.org/3/${mediaType}/${query}/recommendations?api_key=${process.env.API_KEY}&language=en-US&page=1`

        const res = await axios.get(baseUrl)

        return res.data.results;

    }


    // get movie/show credits
    export const getCredits = async (media_type: string, query: number) => {

        const baseUrl = `https://api.themoviedb.org/3/${media_type}/${query}/credits?api_key=${process.env.API_KEY}`


        const res = await axios.get(baseUrl)

        return res.data


    }

    // get movie images
    export const getImages = async (media_type: string,movieid: number) =>{

        const baseUrl = `https://api.themoviedb.org/3/${media_type}/${movieid}/images?api_key=${process.env.API_KEY}`

        const res = await axios.get(baseUrl)

        return res.data.backdrops;
    }


    module.exports = {
        getMovieByTitle,
        getDataByType,
        getExampleMovies,
        getTrendingContent,
        getImagesFromAPI,
        getPopularSeries,
        getAllMovies,
        multiSearch,
        getTopRatedMovies,
        getUpcomingMovies,
        getEscpecificShow,
        getSimilarShows,
        getCredits,
        getImages
    }
  