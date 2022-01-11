import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MovieThumbnail from './MovieThumbnail';
import MoviesCollection from './MoviesCollection';
import FavoriteThumbnail from './FavoriteThumbnail';

function FavoriteMovies({ results }) {
    const BASE_URL = 'https://image.tmdb.org/t/p/original/';
    const favoritesCtx = useContext(FavoritesContext);


    return (
        <section className="text-center mt-5 text-3xl">
            <h1>Favorite Movies</h1>
            <div>
                {results.map((result) => (
                    <FavoriteThumbnail key={result.id} result={result} />
                ))}
            </div>
            {/* <MoviesCollection movies={favoritesCtx.favorites} /> */}
        </section>
    )
}

export default FavoriteMovies
