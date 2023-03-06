
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f94680e291msh207394d94061f8cp1b610ejsn2a5ea3aa1847',
            'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
        }
    };

    export const listcategories = () => {

    fetch('https://kohls.p.rapidapi.com/categories/list', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
        
    }


    export const listpodructs = () => {

    fetch('https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
       

    }


    export const searchProductsByBarcode = (barcode: string) => {
        
        fetch('https://kohls.p.rapidapi.com/products/search-by-barcode?upc='+barcode+'', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }


    export const getProductDetails = () =>{

        fetch('https://kohls.p.rapidapi.com/products/detail?webID=4201989', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    }

    export const getListReview = () =>{

        
        fetch('https://kohls.p.rapidapi.com/reviews/list?ProductId=4201989&Limit=6&Offset=0&Sort=SubmissionTime%3Adesc', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }

    


    module.exports = {

       
    }