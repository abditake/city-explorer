import React, { Component } from 'react'
import { Navbar, Container, } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <div><Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">City-Explorer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
        </Container>
      </Navbar></div>
    )
  }
}
