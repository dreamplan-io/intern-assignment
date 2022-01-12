import { HeartIcon, XIcon } from '@heroicons/react/solid';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/Header';
import { useContext, useState } from 'react';
import FavoritesContext from '../../store/favorites-context';
import ReactPlayer from 'react-player';

function Movie({ result }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  const [showPlayer, setShowPlayer] = useState(false);
  const favoritesCtx = useContext(FavoritesContext);
  const movieIsFavorite = favoritesCtx.movieIsFavorite(result.id);

  const index = result.videos?.results.findIndex((element) => element.type === 'Trailer');

  function toggleFavoriteStatusHandler() {
    if (movieIsFavorite) {
      favoritesCtx.removeFavorite(result.id);
    } else {
      favoritesCtx.addFavorite({
        id: result.id,
        title: result.title || result.original_title,
        vote_average: result.vote_average.toFixed(1),
        src:
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
      });
    }
  }

  return (
    <div>
      <Head>
        <title>{result.title || result.original_title}</title>
        <meta name="description" content="Page with movie details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="relative">
        <div className="relative min-h-[calc(100vh-80px)]">
          <Image
            src={
              `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
              `${BASE_URL}${result.poster_path}`
            }
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute bottom-0 bg-black/30 w-full p-10 space-y-6 z-60">
          <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wide">
            {result.title || result.original_title}
          </h1>
          <p>
            {result.release_date || result.first_air_date} • {Math.floor(result.runtime / 60)}h{' '}
            {result.runtime % 60}m • {result.vote_average} •{' '}
            {result.genres.map((genre, i) => {
              return i === 0 ? genre.name : ', ' + genre.name;
            })}
          </p>
          <div className="flex gap-3 items-center">
            <button
              className="flex items-center gap-2 border-2 border-white rounded-full bg-black/60 px-6 py-2.5 hover:bg-[#a7a7a7] "
              onClick={() => setShowPlayer(true)}
            >
              <img src="/images/play-icon-white.svg" alt="" className="w-6 md:8" />
              <span className="uppercase tracking-wide font-medium md:text-lg">trailer</span>
            </button>
            <button
              className="flex items-center gap-2 border-2 border-white rounded-full bg-black/60 px-6 py-2.5 "
              onClick={toggleFavoriteStatusHandler}>
              {movieIsFavorite ? (
                <HeartIcon className="text-red-400 w-6" />
              ) : (
                <HeartIcon className="text-white hover:text-red-400 w-6" />
              )}
            </button>
          </div>
          <h4 className="md:text-lg lg:text-xl max-w-4xl">{result.overview}</h4>
        </div>

        {/* Build the background overlay for the trailer */}

        {showPlayer && (
          <div 
            className="absolute inset-0 bg-black opacity-50 h-full w-full z-50" 
            onClick={() => setShowPlayer(false)}
          />
        )}

        <div className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transiion duration-1000 ${showPlayer ? "opacity-100 z-50" : "opacity-0"}`}
        >
          <div className='flex items-center justify-between bg-black text-[#f9f9f9] p-3.5'>
            <span className='semibold'>Play Trailer</span>
            <div className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0f0f0f]"
            onClick={() => setShowPlayer(false)}
            >
              <XIcon className="h-5" />
            </div>
          </div>
          <div className="relative pt-[56.25%]">
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: "0", left: "0" }}
                controls={true}
                playing={showPlayer}
                muted={true}
            />
          </div>
        </div>

      </section>
    </div>
  );
}

export default Movie;

export async function getServerSideProps(context) {
  const id = context.query.id;
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=dk&append_to_response=videos`
  ).then((response) => response.json());

  return {
    props: {
      result: request
    }
  };
}
