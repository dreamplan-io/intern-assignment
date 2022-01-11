import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMovie) => {},
    removeFavorite: (movieId) => {},
    movieIsFavorite: (movieId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMovie) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMovie)
        });
    }
    function removeFavoriteHandler(movieId) {
        setUserFavorites(prevUserFavorites => {  
            return prevUserFavorites.filter(movie => movie.id !== movieId)
        })
    }
    function movieIsFavoriteHandler(movieId) {
        return userFavorites.some(movie => movie.id === movieId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        movieIsFavorite: movieIsFavoriteHandler
    }

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;