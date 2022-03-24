import React, { Component } from 'react'
import { Form, Button,Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



export default class Forms extends Component {


  render() {


    return (
      <Container>

      <Form onSubmit={this.props.getCityData}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search for City</Form.Label>
          <Form.Control onInput={this.props.handleCityInput} />
          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form.Group>
      </Form>
      </Container>
    )
  }
}
