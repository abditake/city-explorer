import React, { Component } from 'react'
import { Container, Card, } from 'react-bootstrap'



export default class WeatherDay extends Component {

  render() {
    return (

      <Container>
        <Card>
          <Card.Body>
            <Card.Title>Weather in: {this.props.city} on: {this.props.date}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}





