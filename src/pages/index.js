import React, { useEffect } from 'react';
import Head from 'next/head';
import Movies from '../components/Movies'

const API_KEY = 'b60560a9a0b4b9048d995101f2d38707'
export default function Home({movies}) {
  console.log(movies)
  return (
    <div>
      <Head>
        <title>Intern assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Movies movies={movies} />
    </div>
  );
}


export async function getServerSideProps(context){
  const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=da`)
   .then(res => res.json()); 
  
  return {
    props: {
      movies : res.results,
    }
  }

}
