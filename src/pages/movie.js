import React, { useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
    const API_KEY = 'nøgle'
    
    return (
      <div>
        <Head>
          <title>Intern assignment</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <p className="text-xl font-medium text-gray-800 mx-10 my-10">Movielist</p>
        {/* <img src={image} /> */}
      </div>
    );
  }