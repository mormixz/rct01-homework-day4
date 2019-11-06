import React, { Component } from 'react';

const posterUrlPrefix = 'https://image.tmdb.org/t/p/w780/';

class FilmPoster extends Component {
  render() {
    return <img src={posterUrlPrefix + this.props.posterPath} alt="" />
  }
}

export default FilmPoster;