import React, { Component } from 'react'
import { Container, Card, } from 'react-bootstrap'



export default class WeatherDay extends Component {

  render() {
    return (
        <Card>
          <Card.Body>
            <Card.Title>{this.props.city} Weather: {this.props.forecast}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
    )
  }
}





