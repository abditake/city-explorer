import React, { Component } from 'react'
import MovieC from './MovieC';

export default class Movie extends Component {


  render() {
    
    console.log(this.props.movieArray);
    let movies = this.props.movieArray.map((item, idx) => (
      
      <MovieC
      movie={idx}
      description ={item.description}
      title={item.title}
      avgVotes={item.avgVotes}
      allVotes={item.totalVotes}
      popularity={item.popularity}
      releasedOn={item.releasedOn}
      img={item.img}
      />
      
    ))
    return(
      [movies]
    );
  };
}
