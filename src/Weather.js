import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foreCastData: {},
      foreCastUrl: '',
      showForeCastData: ''
    };
  }

  
  handleSubmit = async (e) => {
    e.preventDefault();
    let url = `${process.env.REACT_APP_SERVER}/pet?searchQuery=${this.state.foreCastUrl}`;
    let petData = await axios.get(url);
    console.log(petData.data);
    this.setState({
      petData: petData.data,
      showPet: true
    });
  };

  render() {
    return (
      <>
        <h1>Find Your Pet</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onInput={this.props.handleInput} />
          <button type="submit">Display Pet</button>
        </form>
        {
          this.state.showForeCastData 
          && 
          <p>{this.state.foreCastData.name} is a {this.state.foreCastData.species}</p>
        }
      </>
    );
  }
}

export default App;


