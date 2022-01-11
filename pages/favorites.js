import { useContext } from 'react';
import FavoriteMovies from '../components/FavoriteMovies';
import Header from '../components/Header';
import MoviesCollection from '../components/MoviesCollection';
import FavoritesContext from '../store/favorites-context';

function favorites() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;


    if (favoritesCtx.totalFavorites === 0) {
        content = <p className="text-center">You got no favorites yet. Start adding some?</p>
    } else {
        content = <FavoriteMovies results={favoritesCtx.favorites} />
    }

    return (
        <div>
            <Header />
            {/* <FavoriteMovies results={favoritesCtx.favorites} /> */}
            {content}
        </div>
    )
}

export default favorites
