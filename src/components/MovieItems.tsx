import React, { FunctionComponent } from 'react';

interface Props {
  title: string;
  overview: string;
  vote_average: number;
  popularity: number;
  poster_path;
}

const MovieItems: FunctionComponent<Props> = ({
  title,
  overview,
  vote_average,
  popularity,
  poster_path
}) => {
  return (
    <div className="card">
      <li>
        <div className="title a">
          <h3>{title}</h3>
        </div>
        <div className="poster">
          <img
            className="inline-block"
            src={'http://image.tmdb.org/t/p/w185' + poster_path}
            alt={title}
          />
          <div>
            <p>score: {vote_average}</p>
          </div>
          <div>
            <p>populæritet: {popularity}</p>
          </div>
          <div className="overview">
            <p>{overview}</p>
          </div>
        </div>
      </li>
    </div>
  );
};

//const { title, overview, vote_average, popularity, poster_path } = movies;
export default MovieItems;
