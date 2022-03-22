
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
      display:''
      
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
    let cityDataLocations = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);

    
    let city = cityDataLocations.data[0];

    
    // save it to state.
    this.setState({
      lat:city.lat,
      lon:city.lon,
      display:city.display_name
    
      
    });
  };
  
  
  
  
  
  render() {
    console.log(this.state)
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

        />
        <div>
          {this.state.lat === "" ? undefined: <li>{this.state.lat}</li>}
          
          {this.state.lon === "" ? undefined: <li>{this.state.lon}</li>}
          
          {this.state.lat === "" ? undefined: <li>{this.state.display}</li>}
        </div>
        <Footer />
      </>
    )
  }
}
