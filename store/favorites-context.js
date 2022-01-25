import React from 'react';
import { createContext, useEffect, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMovie) => {},
    removeFavorite: (movieId) => {},
    movieIsFavorite: (movieId) => {}
});

export function FavoritesContextProvider(props) {
    
    const [userFavorites, setUserFavorites] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('favorites');
            const initialValue = JSON.parse(saved);
            return initialValue;
        } else {
            return []
        }
    });

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

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(userFavorites))
    }, [userFavorites]);

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;