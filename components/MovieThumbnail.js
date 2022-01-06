import Image from 'next/image';
import { useRouter } from 'next/router';

function MovieThumbnail({ result }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  const router = useRouter();

  return (
    <div className="flex flex-col min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300">
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        // width={330}
        // height={210}
        layout="fill"
        objectFit="cover"
      />
      <h1 className="uppercase sm:text-xl md:text-2xl font-bold z-10">
        {result.title || result.original_name}
      </h1>
      {/* <h2 className="md:text-xl z-10">{`Rating: ${result.vote_average}`}</h2> */}
      <h2 className="flex gap-1 z-10">
        <span className="text-sm md:text-base lg:text-lg uppercase">Rating:</span>
        <p className="text-sm md:text-base lg:text-lg">{result.vote_average}</p>
      </h2>
      <h3 className="z-10">
          {result.overview}
      </h3>
    </div>
  );
}

export default MovieThumbnail;
