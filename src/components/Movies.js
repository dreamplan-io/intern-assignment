import React, { useState } from 'react';
import Thumbnail from './Thumbnail';

const Movies = ({movies})=> {
    const [favorite, setFavorite] = useState([]);


    const addToFavorite = id => {
        if(!favorite.includes(id)) setFavorite(favorite.concat(id));
        console.log(id)
    }

    const removeFromFavorite = id => {
        let index = favorite.indexOf(id);
        console.log(index)
        let temp = [...favorite.slice(0,index),...favorite.slice(index + 1)];
        setFavorite(temp);
    }

    let findFavorite = movies.filter(res => favorite.includes(res.id));
    return (
        
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
            {movies.map((movie) => 
                <div key={movie.id}>
                    <Thumbnail movie={movie} />
                    <button className=" bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={() => addToFavorite(movie.id)}>Føj til favoritter</button>
                 </div>
            )}
            <div>
                <h2>Favorite Movies</h2>
                {findFavorite.map(movie => 
                <div key={movie.id} className="flex mx-2 my-2">
                    <p>{movie.title || movie.original_name}</p>
                    <button className=" bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={() => removeFromFavorite(movie.id)} >Fjern fra favoritter</button>
                </div>
                )}
            </div>
        </div>
    );
}

export default Movies;