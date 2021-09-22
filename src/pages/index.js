import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import MovieList from '../components/MovieList';
 
// Note that when fetching movie page you have to change API_KEY in pages/movie/id/index.tsx
const API_KEY = 'd389d2a811bcb1766db631faf7e2241b'

export default function Home({ data }) {
  
  console.log(data);
  return (
    <div className='flex flex-col items-center justify-center'>
      <Head>
        <title>Student assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-xl font-medium text-gray-800 mx-10 mt-10 mb-5">Movielist</h1>
      <Link href='/favorite'>
        <a className='text-xl font-medium text-gray-800 mx-10 mb-10 hover:text-gray-600'>
          Favorite
        </a>
      </Link>
      <MovieList data={data.results}/>
    </div>
  );

}

export async function getStaticProps(context) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=da&page=1`, {
    headers: {
      'Content-Type': 'application/json',
      'Token': ''
    },
  });
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { 
      data 
    }, 
  }
}
