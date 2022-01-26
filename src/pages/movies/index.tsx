import React, { FunctionComponent, useEffect, useState } from 'react';
import Head from 'next/head';

import MovieItems from '../../components/MovieItems';
import Header from '../../components/Header';

interface Props {}
interface IResponseData {
  title: string;
  overview: string;
  vote_average: number;
  popularity: number;
  poster_path;
}

const Movies: FunctionComponent<Props> = () => {
  const [movies, setData] = useState<IResponseData>([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=e98bee57e6fafe1fb6df4618b516a2d7&language=en'
      //"https://api.themoviedb.org/3/trending/movie/week?api_key=e98bee57e6fafe1fb6df4618b516a2d7&language=da"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);
  console.log(movies);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="main">
        {movies.map((item) => {
          return (
            <ul className="grid">
              <MovieItems
                key={item.id}
                title={item.title}
                overview={item.overview}
                vote_average={item.vote_average}
                popularity={item.popularity}
                poster_path={item.poster_path}
              />
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
