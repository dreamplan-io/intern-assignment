import React from "react";


const IMAGE_API = 'https://image.tmdb.org/t/p/w500/'
const MovieList = ({title, poster_path, overview, popularity}) => {
    return (
        
         (<div>
            
            <img src = {IMAGE_API + poster_path} alt = 'movie'></img>
            <div>
                <h2>{title}</h2>
                <p>{overview}</p>
                <p>{popularity}</p>
            </div>
        </div>))

}

export default MovieList;