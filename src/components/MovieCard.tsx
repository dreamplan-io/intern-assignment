import React from 'react'
import Link from 'next/link'

interface Props{
    id: number,
    title: string,
    overview: string,
    image: string,
    popularity: string
}

const MovieCard: React.FC<Props> = (props) => {
    const { id, title, overview, image, popularity } = props;

    

    const  truncate = (str, length) => {
        return str.length > length ? str.substring(0, length - 3) + "..." : str;
    }

    return (
        <Link href={'/movie/[id]'} as={`/movie/${id}`}>
            <div className='flex p-10 bg-gray-300 mb-5 cursor-pointer'>
                <img src={`https://image.tmdb.org/t/p/w200${image}`} alt="movie_image" className='mr-5' />
                <div className='flex justify-start text-left flex-col'>
                    <h1 className='mb-2 text-lg font-bold'>{title}</h1>
                    <p>{truncate(overview, 80)}</p>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard
