import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherDay from './WeatherDay'


class Weather extends React.Component {

  render() {
    console.log(this.props.weatherData);


    let weather = this.props.weatherData.map((day, idx) => (
      <WeatherDay
        description={day.description}
        key={idx}
        city={this.props.city}
        date={day.forecast}
      />
    ))
    return (
      [weather]
    );
  }
}

export default Weather;


