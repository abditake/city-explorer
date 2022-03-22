
import React, { Component } from 'react'
import Header from './Header';
import Forms from './Form';
import Footer from './Footer';
import axios from 'axios';
import Map from './Map';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cityData: {},
      lat: '',
      lon: '',
      display: '',
      error: false,
      errorMessage: '',



    }
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value

    });
  };

  getCityData = async (e) => {
    e.preventDefault();
    // get data from api
    // let ParsedLat = parseInt(this.state.lat);
    // let ParsedLon = parseInt(this.state.lon);
    try {
      let cityDataLocations = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);




      let cities = cityDataLocations.data[0];
      console.log(cities);


      // save it to state.
      this.setState({
        lat: cities.lat,
        lon: cities.lon,
        display: cities.display_name,
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `Put a Real City Please: ${error.response.status}`
      })
    }
  };





  render() {
    console.log(this.state.lat);
    console.log(this.state.lon);
    let cityMapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=14&size=300x300`

    // let cityDataLocationsList = this.state.cityData.reduce((acc,curr) => { 
    //   return acc + curr.display_name + curr.lat + curr.lon
    // }
    // )
    return (
      <>
        <Header />
        {/* <div> {cityDataLocationsList} </div> */}
        <Forms
          getCityData={this.getCityData}
          handleCityInput={this.handleCityInput}



          error={this.state.error}
          errorMessage={this.state.errorMessage}
        />
      
        {this.state.lat ?
          <Map
            lat={this.state.lat}
            lon={this.state.lon}
            display={this.state.display}
            img={cityMapUrl}
          />
          :
          <>
          {this.state.errorMessage}
          </>
        }
        <Footer />
      </>
    )
  }
}
