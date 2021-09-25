import React from 'react';
import Head from 'next/head';
import { useMovies } from '../components/useMovies';
import Movies from '../components/Movies';

export default function Home() {
  const API_KEY =
    'paste your movie apikey here so we can easily test your solution with our own apikey';
  const { movies, isLoading } = useMovies();

  return (
    <div>
      <Head>
        <title>Student assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-6xl text-center text-red-500 mx-auto mt-32">Movielist</p>
      <Movies movies={movies} isLoading={isLoading} />
    </div>
  );
}
