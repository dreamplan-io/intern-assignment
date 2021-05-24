import Image from 'next/image';
import Link from 'next/link';



function Thumbnail({movie}) {
    const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original'

    

    return (
        <div className="group cursor cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            
            <Link href={`/movies/${movie.id}`} key={movie.id}>
                <Image
                layout='responsive'
                src={`${IMG_BASE_URL}${movie.backdrop_path || movie.poster_path}`}
                height={1080}
                width={1920}
                />
            </Link>
             <div className="p-2">
                 <p className="truncate max-w-md">{movie.overview || "Der er desværre intet resumé af denne film"}</p>
                 <h2 className="mt-1 text-2xl transition-all duration-100 ease-in-out">
                     {movie.title || movie.original_name}
                 </h2>
             </div>
        </div>
    );
}

export default Thumbnail;