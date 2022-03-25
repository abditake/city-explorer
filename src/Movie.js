import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class Movie extends Component {
  
  
  render() {
      return(
        <>
      {
        this.props.movieArray.map((item,idx) => (

         
          <Card key={idx}>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
              {item.description}
              </Card.Text>
              <Card.Text>
              {item.avgVotes}
              </Card.Text>
              <Card.Text>
              {item.popularity}
              </Card.Text>
              <Card.Text>
              {item.releasedOn}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}

      </>
      );
  }
}
