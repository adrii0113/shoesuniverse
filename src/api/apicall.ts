

    export const getMovieByTitle =  async (title: String) => {
        
        const  response = await fetch (`http://www.omdbapi.com/?t=${title}&apikey=1d90c95a`)
        .then(response => response.json())
        // .then(response => console.log(response))
        .catch(err => console.error(err));
        // console.log(response)
        return response;
    }



    module.exports = {
        getMovieByTitle
    }
  