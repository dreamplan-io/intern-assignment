import React, { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import FavoriteThumbnail from './FavoriteThumbnail';

function FavoriteMovies({ results }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <section className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px]">
      <h1>Favorite Movies</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-2 p-2 -m-2">
        {results.map((result) => (
          <FavoriteThumbnail key={result.id} result={result} />
        ))}
      </div>
      {/* <MoviesCollection movies={favoritesCtx.favorites} /> */}
    </section>
  );
}

export default FavoriteMovies;
