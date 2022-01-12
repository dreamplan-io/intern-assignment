import Image from 'next/image';
import { useRouter } from 'next/router';
import { HeartIcon } from '@heroicons/react/solid';
import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';

function FavoriteThumbnail({ result }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  const router = useRouter();
  const favoritesCtx = useContext(FavoritesContext);
  const movieIsFavorite = favoritesCtx.movieIsFavorite(result.id);

  function toggleFavoriteStatusHandler() {
    if (movieIsFavorite) {
      favoritesCtx.removeFavorite(result.id)
    } else {
      favoritesCtx.addFavorite({
        id: result.id,
        title: result.title || result.original_name,
        vote_average: result.vote_average.toFixed(1),
        src: `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
        `${BASE_URL}${result.poster_path}`
      })
    }
}

  return (
    <div className="relative">
      <div
        className="flex flex-col min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300"
        onClick={() => router.push(`/movie/${result.id}`)}>
        <div>
          <Image
            src={result.src}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="absolute bottom-0 bg-black/30 z-10 p-2 rounded w-full">
          <div>
            <h1 className="uppercase sm:text-l md:text-xl lg:text-2xl font-bold">
              {result.title || result.original_name}
            </h1>
            <h2 className="flex gap-1 text-sm lowercase items-center">
              <span className="">Rating:</span>
              <p className="">{result.vote_average}</p>
            </h2>
          </div>
        </div>
      </div>
      <button
        className="absolute right-0 bottom-0 m-2 h-8 w-8 cursor-pointer z-20 hover:text-red-400"
        onClick = {toggleFavoriteStatusHandler}
      >
        {movieIsFavorite ? <HeartIcon className="text-red-400" /> : <HeartIcon className="text-white hover:text-red-400"/>}
      </button>
    </div>
  );
}

export default FavoriteThumbnail;
