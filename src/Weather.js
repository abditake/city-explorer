import React from 'react';
import { ListGroup } from 'react-bootstrap';

class App extends React.Component {

  render() {
    return (
      <>
        <ListGroup>
          <ListGroup.Item>
            
            Day: {this.props.foreCastData[0]}
            <br></br>
            {this.props.foreCastDescData[0]}
            
            </ListGroup.Item>
          <ListGroup.Item>
            
          Day: {this.props.foreCastData[1]}
            <br></br>
            {this.props.foreCastDescData[1]}
          
          </ListGroup.Item>
          
          
          <ListGroup.Item>
          Day: {this.props.foreCastData[2]}
            <br></br>
            {this.props.foreCastDescData[2]}
          </ListGroup.Item>
        </ListGroup>
      </>
    );
  }
}

export default App;


