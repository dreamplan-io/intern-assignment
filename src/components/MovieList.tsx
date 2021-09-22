import React from 'react'
import MovieCard from './MovieCard';

interface Movie{
    id: number,
    title: string,
    overview: string,
    backdrop_path: string,
    popularity: string
}

interface Props{
    data: Movie[]
}
const MovieList: React.FC<Props> = ({ data }) => {
    
    return (
        <div className='w-200'>
            {data.map((movie, index) => {
                return (
                    <MovieCard
                        key={index}
                        id={movie.id} 
                        title={movie.title} 
                        overview={movie.overview}
                        image={movie.backdrop_path} 
                        popularity={movie.popularity}
                    />
                )
            })}
        </div>
    )
}

export default MovieList;
