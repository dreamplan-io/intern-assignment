import React, { useState } from 'react';

export default function Movies({ movies, isLoading }) {
  return (
    <div className="container mx-auto">
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4 space-x-6">
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

const Movie = ({ movie }) => {
  const image_path = 'https://image.tmdb.org/t/p/w500/';
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={`${image_path}${movie.poster_path}`} alt="movie" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-blue-500 text-xl mb-2">{movie.title || movie.name}</div>
        <ul>
          <li className="mb-1">
            <strong>Overview </strong>
            {movie.overview === '' ? <p>Ingen</p> : <p>{movie.overview}</p>}
          </li>
          <li>
            <strong>Popularity: </strong>
            {movie.popularity}
          </li>
        </ul>
      </div>
    </div>
  );
};
