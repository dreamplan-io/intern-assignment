import React, { Component } from 'react';
import Head from 'next/head';
import MovieList from './components/Movie';

export default function Home() {
  const API_KEY = 'b69f62788f64a815bc7df1b175534536';
  const API_FULL =
    'https://api.themoviedb.org/3/movie/550?api_key=b69f62788f64a815bc7df1b175534536';

  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const response = await fetch(`${API_FULL}`);
    const data = await response.json();

    setMovies(data.results);
  }, []);

  return (
    <div>
      <Head>
        <title>Student assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-xl font-medium text-gray-800 mx-10 my-10">Movielist</p>
      <div>
        <MovieList />
      </div>
    </div>
  );
}
