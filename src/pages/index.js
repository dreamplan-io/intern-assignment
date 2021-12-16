import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {GlobalContext, GlobalProvider} from "../context/GlobalState"


export default function Home() {
  const API_KEY = 'cc3ed38a71a7730052e165b5645c1a4a'
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&language=da-DK`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setMovies(result.results);
        }
      );
  }, []);

  return (
    <div>
      <Head>
        <title>Student assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-4xl font-medium text-center text-gray-800 mx-10 my-10">Movielist</p>

      <div className="container mx-auto content-center bg-blue-200">
          {movies.map( movie => (
            <div className="flex flex-col items-center">
              <p className="text-4xl underline pb-6 text-center mt-6">{movie.title}</p>
              <img src={'https://image.tmdb.org/t/p/w300' + movie.poster_path} />
              <p className="text-xl italic text-center mt-6">{movie.overview || 'Der findes ikke nogen oversættelse til dansk'}</p>
              <p className="text-xl text-center mt-6">Filmens Popularitet: {movie.popularity}</p>
              <Link href={"/details/"+ movie.id}>
                <a className="text-red-600 text-xl underline">Gå til film</a>
              </Link>
              <button className="text-green-600 cursor-pointer mb-3 text-xl " onClick={() => addFavorites}>Tilføj til favoriter</button>
            </div>
          ))}
        </div>
    </div>
  );
}
