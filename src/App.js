
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
      errorMessage: ''
      
      
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
  
      
      let city = cityDataLocations.data[0];
  
      
      // save it to state.
      this.setState({
        lat:city.lat,
        lon:city.lon,
        display:city.display_name,
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

        />
          {this.state.error
          ?
          <p>{this.state.errorMessage}</p>
           :
           <ul>
          {this.state.lat === "" ? undefined: <li>{this.state.lat}</li>}
          
          {this.state.lon === "" ? undefined: <li>{this.state.lon}</li>}
          
          {this.state.display === "" ? undefined: <li>{this.state.display}</li>}
          {this.state.img === "" ? undefined: <img src={this.state.img} alt={this.state.display}/>}
          </ul> 
          }
          
        
        <Footer />
      </>
    )
  }
}
