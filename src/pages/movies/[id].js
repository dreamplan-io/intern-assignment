
const API_KEY = 'b60560a9a0b4b9048d995101f2d38707';
export async function getServerSideProps(context){
    
    const {id} = context.query;
    
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=da`)
    const data = await res.json();

    return {
        props: {
            movie : data
        }
    }
}



function Details({movie}){
    const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original'
    return(
        <div className="py-4">
            <figure className="lg:flex bg-gray-100 rounded-sm p-1">
                <img className="w-50 h-50 md:w-100 md:h-60 md:rounded-lg rounded-2xl mx-auto" src={`${IMG_BASE_URL}${movie.backdrop_path || movie.poster_path}`} ></img>
                <div className="md:p-6 text-center md:text-left space-y-4">
                    <p className="text-lg font-semibold">
                        {movie.overview || "Der er desværre intet resumé af denne film"}
                    </p>
                    <div className="text-sm">
                        Udgivet - {movie.release_date}
                        
                    </div>
                    <div className="text-sm">
                        Popularitet - {movie.popularity}
                    </div>
                </div>
            </figure>
        </div>
    )
}

export default Details;