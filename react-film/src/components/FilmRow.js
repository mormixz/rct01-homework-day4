import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

const FilmRow = (props) => {

    const year = new Date(props.film.release_date).getFullYear();
    return (
      <div className="film-row" onClick={props.handleDetailsClick}>
        <FilmPoster posterPath={props.film.poster_path} />
        <div className="film-summary">
          <h1>{props.film.title}</h1>
          <p>{year}</p>
        </div>
        <Fave isFave={props.isFave} onFaveToggle={props.onFaveToggle}/>
      </div>
    )
}

export default FilmRow;