import React, { Component } from 'react'
import { Card } from 'react-bootstrap'


export default class Movie extends Component {
  render() {
    let movieArray = this.props.movieArray;
    return (
      movieArray.map((idx,item) => (

        <Card key={idx}>
          <Card.Body>
            <Card.Title>{item.title[idx]}</Card.Title>
            <Card.Text>
              {item.description[idx]}
            </Card.Text>
            <Card.Text>
              {item.avgVotes[idx]}
            </Card.Text>
            <Card.Text>
              {item.popularity.idx}
            </Card.Text>
            <Card.Text>
              {item.releasedOn[idx]}
            </Card.Text>
          </Card.Body>
        </Card>

      )));
    };
};

      
 



