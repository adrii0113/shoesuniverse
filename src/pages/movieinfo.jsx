export default function (props) {

    const test = (e) => {
        
    //     const data = JSON.parse(props.router.query.data);
    //    console.log(data)
       let params = new URLSearchParams(location.search);
       var name = params.get('data')
       console.log(name)
    };
    return (


        <div>

            <button className="bg-white" onClick={test}>Hola</button>
            
        </div>


    )



}