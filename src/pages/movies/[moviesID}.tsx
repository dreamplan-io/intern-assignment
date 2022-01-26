// import { useRouter } from 'next/router';
// import { Fragment } from 'react';

// function MovieDetialPage() {
//   const router = useRouter();
//   const movieID = router.query.movieID;
//   //   const movie = getMovieById(movieID);

//   if (!movie) {
//     return <p>No movie found</p>;
//   }

//   return (
//     <Fragment>
//       <div className="card">
//         <li>
//           <div className="title">
//             <h3>{movie.title}</h3>
//           </div>
//           <div className="overview">
//             <p>{movie.overview}</p>
//           </div>
//           <div className="poster">
//             <img
//               className=""
//               src={'http://image.tmdb.org/t/p/w185' + movie.poster_path}
//               alt={movie.title}
//             />
//             <div>
//               <p>score: {movie.vote_average}</p>
//             </div>
//             <div>
//               <p>populæritet: {movie.popularity}</p>
//             </div>
//           </div>
//         </li>
//       </div>
//     </Fragment>
//   );
// }

// export default MovieDetialPage;

// export function getMovieById(id) {
//   return movies.find((movie) => movie.id === id);
// }
