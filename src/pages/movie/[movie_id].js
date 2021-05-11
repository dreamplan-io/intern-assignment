import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'

const Movie = () => {

	const API_KEY = '047565ebfb674de5c9d15908842bb394';

	const router = useRouter()
	const { movie_id } = router.query


	const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movie, setMovie] = useState([]);



	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=da-DK`)
		.then((res) => res.json())
		.then(
			(result) => {
				setIsLoaded(true);
				setMovie(result);
			},
			(error) => {
				setIsLoaded(true);
				setError(error);
			}
		);
	}, [])
	
	useEffect(() => {
		console.log(movie)
	},[])


	return(
		<div className="container mx-auto">
			<a className="text-blue-600 cursor-pointer mb-3" onClick={() => router.back()}>Gå tilbage</a>
			<img src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} />
			<h1 className="text-3xl mt-6">{movie.title}</h1>
			<p className="max-w-prose my-4">
				{movie.overview || 'Beskrivelse på dansk findes ikke.'}
			</p>
		</div>
	);
}

export default Movie