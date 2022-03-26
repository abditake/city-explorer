

import React, { Component } from 'react'
import Header from './Header';
import Forms from './Form';
import Footer from './Footer';
import axios from 'axios';
import Map from './Map';
import Weather from './Weather.js'
import Movie from './Movie.js';





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
      weatherData: [],
      movieDataArray: []

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

      let cityForeCast = await axios.get(`${process.env.REACT_APP_SERVER}weather?searchQueryCity=${this.state.city}}`);

      let cityMovieData = await axios.get(`${process.env.REACT_APP_SERVER}movie?movieQueryCity=${this.state.city}`);

      let forecast = cityForeCast.data;

      let movieData = cityMovieData.data;


      // save it to state.
      this.setState({
        lat: cities.lat,
        lon: cities.lon,
        display: cities.display_name,
        weatherData: forecast,
        movieDataArray: movieData


      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `Put a Real City Please: ${error.response.status}`
      })
    }
  };
  


render() {
  let cityMapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=12&size=300x300`

  console.log(this.state.movieDataArray);

  let foreCastWeatherData = this.state.weatherData.map((a) => {
    return a.forecast;
  });

  let foreCastDescData = this.state.weatherData.map((a) => {
    return a.description;
  });


  return (
    <>
      <Header/>
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
      {this.state.lat
        ?
        <Weather
          foreCastData={foreCastWeatherData}
          foreCastDescData={foreCastDescData}
        />
        :
        <>
        </>
      }
      {this.state.movieDataArray
      ?
      <Movie
      movieArray={this.state.movieDataArray}
      />
      :
      <>
      </>
      }
      <Footer />
    </>
  )
}
}
