import React, { useState } from 'react'


const Favorite = () => {

    const [state, setstate] = useState(localStorage.getItem('myCat'))
    const  movies = localStorage.getItem('myCat');


    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-xl font-medium text-gray-800 mx-10 mb-10 hover:text-gray-600'>Favorite</h1>

        </div>
    )
}

export default Favorite;
