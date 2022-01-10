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
        <div className="absolute bottom-10 z-60">
          <h1>{result.title || result.original_title}</h1>
          <div>
            <img src="/images/play-icon-white.svg" alt="" className="w-8" />
            <span className="uppercase">trailer</span>
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
