import { HeartIcon, } from '@heroicons/react/solid';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/Header';

function Movie({ result }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';

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
        <div className="absolute bottom-0 bg-black/30 w-full p-5 space-y-6 z-60">
          <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wide">{result.title || result.original_title}</h1>
          <p>
            {result.release_date || result.first_air_date} • {" "} {Math.floor(result.runtime / 60)}h {result.runtime % 60}m • {" "} {result.vote_average} • {" "} {result.genres.map((genre, i) => {return i === 0 ? genre.name : (', ' + genre.name)})}
          </p>
          <div className="flex gap-3 items-center">
            <button className="flex items-center gap-2 border-2 border-white rounded-full bg-black/60 px-6 py-2.5 hover:bg-[#a7a7a7] ">
              <img src="/images/play-icon-white.svg" alt="" className="w-6 md:8" />
              <span className="uppercase tracking-wide font-medium md:text-lg">trailer</span>
            </button>
            <button className="flex items-center gap-2 border-2 border-white rounded-full bg-black/60 px-6 py-2.5 hover:bg-[#a7a7a7] ">
              <HeartIcon 
              className="w-6"
              />
              <span className='uppercase tracking-wide font-medium md:text-lg '>Add to Favorites</span>
            </button>
          </div>
          <h4 className="md:text-lg lg:text-xl max-w-4xl">{result.overview}</h4>
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
