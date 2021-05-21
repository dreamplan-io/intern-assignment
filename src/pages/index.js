import React, { useEffect } from 'react';
import Head from 'next/head';

export default function Home({results}) {
  const API_KEY = 'nøgle'
const trending = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=da-DK`
  
  console.log(results)

  return (
    <div>
      <Head>
        <title>Intern assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {resresult.map((result)=>(
        
          <h1>{result}</h1>
        ))}
      </div>

      <p className="text-xl font-medium text-gray-800 mx-10 my-10">Movielist</p>
      {/* <img src={image} /> */}
    </div>




  );



  
}

export const getStaticProbs = async () => {
  const res = await fetch(trending)
  const resresult = await res.json()
  
  console.log(resresult)

  return {
    props: {
      resresult
    }
  }
}

