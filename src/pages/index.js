import React from 'react';
import Head from 'next/head';

export default function Home() {
  const API_KEY = 'brug denne konstant til din api key, så vi nemt kan teste med vores egen senere'
  
  return (
    <div>
      <Head>
        <title>Intern assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-xl font-medium text-gray-800 mx-10 my-10">Movielist</p>
    </div>
  );
}
