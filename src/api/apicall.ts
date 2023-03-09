    import axios from "axios";

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



    module.exports = {
        getMovieByTitle,
        getDataByType
    }
  