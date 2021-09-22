import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import React from 'react'

const API_KEY = 'd389d2a811bcb1766db631faf7e2241b'

type Movie = {
    id: number;
    title: string;
    overview: string;
    backdrop_path:string;
}

function Movie({ movie }: InferGetStaticPropsType<typeof getStaticProps>) {
    const FAV_KEY = 'FAV_MOVIES'

    function isFavorited() {
        if (!localStorage.getItem(FAV_KEY)) 
            return false;

        let favMovies = JSON.parse(localStorage.getItem(FAV_KEY));
        return favMovies.some(obj => obj.id === movie.id);
    }

    const addToFav = () => {
        if (isFavorited)
            return;

        let favMovies = JSON.parse(localStorage.getItem(FAV_KEY));
        favMovies.push(movie);
        localStorage.setItem(FAV_KEY, favMovies);
    }

    const removeFromFav = () => {
        if (!isFavorited)
            return;

        let favMovies = JSON.parse(localStorage.getItem(FAV_KEY));
        let ndx = favMovies.findIndex(obj => obj.id === movie.id);
        let newMovies = favMovies.splice(ndx, 1);
        localStorage.setItem(FAV_KEY, newMovies);
     }
    
    if (!movie)
    {
        return (
            <div>Movie not found</div>
        )
    }

    return (
        <div className='flex items-center flex-col max-w-100'>
            <div className='flex justify-between p-10 mb-5'>
                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="movie_image" className='mr-5' />
                <div className='flex justify-start flex-col'>
                    <h1 className='mb-2 text-lg font-bold'>{movie.title}</h1>
                    <p>{movie.overview}</p>
                </div>
                { 
                /*
                    isFavorited() ?
                        <button onClick={removeFromFav}>Remove from favorite</button> :
                        <button onClick={addToFav}>Add to favorite</button>
                */
                }
            </div>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
        fallback: true,
      }
}

export const getStaticProps = async (context: any) => {
    console.log(context.params.id);
    
    const res = await fetch(`https://api.themoviedb.org/3/movie/${context.params.id}?api_key=${API_KEY}&language=da`)

    const movie = await res.json()

    return {
        props: {
        movie
    },
    }
}

export default Movie
