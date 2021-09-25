import React, { useState, useEffect } from 'react';

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = '5d5b3381df166a7a1e48e09a35eca0f6';

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=da`
      );
      if (response.ok) {
        const moviesData = await response.json();
        setMovies(moviesData.results);
        console.log(moviesData.results);
        setIsLoading(false);
      } else {
        throw new Error(response.statusText);
      }
    })();
  }, []);

  return { movies, isLoading };
}
