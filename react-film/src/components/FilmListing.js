import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  state = {
    filter: 'all'
  }

  handleFilterClick = filter => {
    console.log(`Setting filter to ${filter}`);
    this.setState({ filter })
  }

  render() {
    let allFilms 

    if(this.state.filter==="all"){
      allFilms = 
      this.props.films.map(film => 
        <FilmRow 
        key={film.id} 
        film={film} 
        isFave={this.props.faves.includes(film)}
        onFaveToggle={() => this.props.onFaveToggle(film)}
        handleDetailsClick={()=>this.props.handleDetailsClick(film)}
        />
      );
    }else{
      allFilms = 
      this.props.faves.map(film => 
        <FilmRow 
        key={film.id} 
        film={film} 
        isFave={this.props.faves.includes(film)}
        onFaveToggle={() => this.props.onFaveToggle(film)}
        handleDetailsClick={()=>this.props.handleDetailsClick(film)}
        />
      );
    }
    

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={"film-list-filter " + (this.state.filter === "all" ? "is-active" : "")} onClick={() => this.handleFilterClick('all')}>
            ALL
      <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={"film-list-filter " + (this.state.filter === "faves" ? "is-active" : "")} onClick={() => this.handleFilterClick('faves')}>
            FAVES
      <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>
        {allFilms}
      </div>
    )
  }
}

export default FilmListing;