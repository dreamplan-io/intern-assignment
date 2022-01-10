import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Slider from '../components/Slider';
import MoviesCollection from '../components/MoviesCollection';

export default function Home({popularMovies}) {
  const API_KEY = 'paste your movie apikey here so we can easily test your solution with our own apikey'
  
  return (
    <div>
      <Head>
        <title>Cool MovieList</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="">
        <Slider />
        <MoviesCollection results={popularMovies} title="Popular Movies" />
      </main>
      
    </div>
  );
}

export async function getServerSideProps(context) {
  

  const popularMoviesRes = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=dk&page=1`);
  const popularMovies = await popularMoviesRes.json();

  return {
    props: {
      popularMovies: popularMovies.results,
    },
  };
}