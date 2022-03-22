
import React, { Component } from 'react'
import Header from './Header';
import Forms from './Form';
import Footer from './Footer';
import axios from 'axios';




export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cityData: {},
      lat:'',
      lon:'',
      display:'',
      error: false,
      errorMessage: '',
      img: ''

      
      
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
    try{
      let cityDataLocations = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);

      let cityDataMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=12&size=300x300&format=<format>&maptype=<MapType>&markers=icon:<icon>|${this.state.lat},${this.state.lon}&markers=icon:<icon>|${this.state.lat},${this.state.lon}`
  
      
      let cities = cityDataLocations.data[0];
  
      
      // save it to state.
      this.setState({
        lat:cities.lat,
        lon:cities.lon,
        display:cities.display_name,
        img: cityDataMap
      });
    } catch (error){
      this.setState({
        error:true,
        errorMessage: `An error occurred: ${error.response.status}`
      })
    }
  };
  
  
  
  
  
  render() {
    
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
          lat={this.state.lat}
          lan={this.state.lan}
          display={this.state.display}
          img={this.state.img}
          error={this.state.error}
          errorMessage={this.state.errorMessage}
        />

        <Footer />
      </>
    )
  }
}
