import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'



export default class Forms extends Component {


  render() {


    return (
      <Form onSubmit={this.props.getCityData}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search for City</Form.Label>
          <Form.Control onInput={this.props.handleCityInput} />
          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form.Group>
      </Form>
    )
  }
}
