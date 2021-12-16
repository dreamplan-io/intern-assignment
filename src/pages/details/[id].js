import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'

const Movie = () => {

	const API_KEY = 'cc3ed38a71a7730052e165b5645c1a4a';

	const router = useRouter()
	const { id } = router.query


  const [movie, setMovie] = useState([]);


	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=da-DK`)
		.then((res) => res.json())
		.then(
			(result) => {
				setMovie(result);
			}
		);
	}, [])
	
	return(
		<div className="container mx-auto bg-blue-200">
			<a className="text-red-600 cursor-pointer mb-3 text-xl underline" onClick={() => router.back()}>Gå tilbage</a>
			<img src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} />
			<h1 className="text-4xl mt-6 underline ">{movie.title}</h1>
            <p className='text-lg max-w-prose'>
                Udgivelse: {movie.release_date} 
            </p>
            <p className='text-lg '>
                Gennemsnitlige Bedømmelse:<a className='underline'> {movie.vote_average} stjerner </a>
            </p>
            <p className='text-base max-w-prose'>
                Antal Stemmer: {movie.vote_count}
            </p>
			<p className="italic max-w-prose my-4">
				{movie.overview || 'Der findes ikke nogen oversættelse til dansk'}
			</p>
            <p className='text-base max-w-prose'>
                Popularitet: {movie.popularity}
            </p>
            
		</div>
	);
}

export default Movie