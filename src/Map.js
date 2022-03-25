import React, { Component } from 'react'
import { Card,Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Map extends Component {
  
  render() {
    return (
      <>
       
          <Container>
          <img src={this.props.img} alt={this.props.display} />
          <Card className='map'>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>City: {this.props.display}</Card.Text>
              <Card.Text>Latitude: {this.props.lat}</Card.Text>
              <Card.Text>Longitude: {this.props.lon}</Card.Text>
            </Card.Body>
          </Card>
          </Container>
        </>



        )
  }
}
