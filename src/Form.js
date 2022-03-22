import React, { Component } from 'react'
import { Form, Button} from 'react-bootstrap'


export default class Forms extends Component {
  

  render() {
    
    
    return (
      <Form onSubmit={this.props.getCityData}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search for City</Form.Label>
          <Form.Control onInput={this.props.handleCityInput}/>
          {this.props.error
          ?
          <p>{this.props.errorMessage}</p>
           :
           <ul>
          {this.props.lat === "" ? undefined: <li>{this.props.lat}</li>}
          
          {this.props.lon === "" ? undefined: <li>{this.props.lon}</li>}
          
          {this.props.display === "" ? undefined: <li>{this.props.display}</li>}
          <img src={this.props.img} alt={this.props.display}/>
          </ul> 
          }
          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form.Group>
      </Form>
    )
  }
}
