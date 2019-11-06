import React, { Component } from 'react';
import TMDB from './TMDB';
import FilmListing from './components/FilmListing';
import FilmDetails from './components/FilmDetails';
import './App.css';

const { films } = TMDB;

class App extends Component {

  state={
    films:films,
    faves:[],
    current:[],
  }

  handleDetailsClick = film => {
    console.log(`Fetching details for ${film.title}`);
    console.log(TMDB.api_key)
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;
    fetch(url)
    .then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data); // Take a look at what you get back.
      this.setState({current: data});
    });
  }

  handleFaveToggle = film => {
    const faves = [...this.state.faves]
    const filmIndex = faves.indexOf(film)
    if(filmIndex === -1){
      faves.push(film)
    }else{
      faves.splice(filmIndex,1)
    }
    this.setState({ faves })
  }

  render() {
    const { faves,current,films } = this.state;
    return (
      <div className="film-library">
        <FilmListing 
          films={films} 
          faves={faves} 
          onFaveToggle={this.handleFaveToggle} 
          handleDetailsClick={this.handleDetailsClick}
        />
        <FilmDetails film={current}/>
      </div>
    );
  }
}

export default App;
