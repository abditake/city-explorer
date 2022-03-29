import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class MovieC extends Component {
  
  render() {
   

    return (
      <>
        <Card>
          <Card.Body>
            <Card.Img src={`https://image.tmdb.org/t/p/w500/${this.props.img}`} alt={this.props.title}/>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
              {this.props.avgVotes}
            </Card.Text>
            <Card.Text>
              {this.props.allVotes}
            </Card.Text>
            <Card.Text>
              {this.props.popularity}
            </Card.Text>
            <Card.Text>
              {this.props.releasedOn}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}
