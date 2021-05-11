import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link'

export default function Home() {
  const API_KEY = '047565ebfb674de5c9d15908842bb394';

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=da-DK&sort_by=popularity.desc`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMovies(result.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log('movies', movies);
    return (
      <div>
        <Head>
          <title>Intern assignment</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <p className="text-xl font-medium text-gray-800 mx-10 my-10">Movielist</p>
        <div className="grid grid-cols-3 gap-6">
          {movies.map( movie => (
            <div className="flex flex-col items-center">
              <img src={'https://image.tmdb.org/t/p/w300' + movie.poster_path} />
              <p className="text-xl text-center mt-4">{movie.title}</p>
              <Link href={"/movie/"+ movie.id}>
                <a className="text-blue-600">Læs mere</a>
              </Link>
            </div>
          ))}
          </div>
        </div>
    );
  }
}
