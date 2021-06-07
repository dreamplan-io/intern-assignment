import React, { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar'
import PopularMovieList from '../components/PopularMovieList'


export default function Home() {
  const API_KEY = '22fc1b2cde82f8d425890251eea5ae5e'
  
  return (
    <div>
      <Head>
        <title>Intern assignment | MovieList</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <p className="text-4xl font-serif text-center font-extrabold text-gray-800 m-8">Populære film</p>

      <PopularMovieList />
      
    </div>

    
  );
}
