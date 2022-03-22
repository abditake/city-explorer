import React, { Component } from 'react'
import { Card, } from 'react-bootstrap'

export default class Map extends Component {
  // constructor(props) {
  //   super(props)

  //   let cityMapUrl = `https://maps.locationiq.com/v3/staticmap?key=<${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.lat},${this.props.lon}&zoom=12&size=300x300&format=<format>&maptype=<MapType>&markers=icon:<icon>|${this.props.lat},${this.props.lon}&markers=icon:<icon>|${this.props.lat},${this.props.lon}`

  //   this.setState({
  //     img:cityMapUrl 
  //   })
  // }


  render() {
    console.log(this.props.img);
    return (
      <>
        {/* <ul>
          {this.props.lat === "" ? undefined : <li>{this.props.lat}</li>}

          {this.props.lon === "" ? undefined : <li>{this.props.lon}</li>}

          {this.props.display === "" ? undefined : <li>{this.props.display}</li>}
          <img src={this.props.img} alt={this.props.display} />
        </ul> */}
        
        
        
          <img src={this.props.img} alt={this.props.display} />
          <Card className='map'>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>City: {this.props.display}</Card.Text>
              <Card.Text>Latitude: {this.props.lat}</Card.Text>
              <Card.Text>Longitude: {this.props.lon}</Card.Text>
            </Card.Body>
          </Card>
        </>



        )
  }
}
