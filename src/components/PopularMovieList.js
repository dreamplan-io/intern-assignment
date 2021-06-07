import React, {useEffect, useState} from 'react';
import axios from 'axios';

const PopluarMovieList = () => {

    const Base_URL = 'https://api.themoviedb.org/3';

    const [data, setData] = useState([]);

    const api = axios.create({baseURL: Base_URL});

    const getPopularMovies = api.get('/movie/popular?api_key=22fc1b2cde82f8d425890251eea5ae5e&language=da');
    const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

    useEffect(() => {
        getPopularMovies.then((res) => {
            setData(res.data.results)
        });
    }, []);

    return(

            <div className="mx-28">
                {data.map((movie) => (

                    <div className="font-serif text-gray-800 text-xl" key={movie.id}>
               
                        <p className="font-bold underline mb-2">Titel: {movie.title}</p>
                        <p className="mb-2">Originalt sprog: {movie.original_language} </p> 
                        <p className="mb-2">Beskrivelse: {movie.overview}</p> 
                        <p className="mb-2">Udgivelsesdato: {movie.release_date}</p> 
                        <p className="mb-2">Popularitet: {movie.popularity}</p> 
                        
                        <div className="flex items-center justify-center m-8">
                            <img className="rounded-lg" src={getImage(movie.poster_path)} />
                        </div>

                    </div>
                ))}
            </div>
    )
}

    export default PopluarMovieList;