import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
  isActive:true
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className="box teal lighten-2">
          <a className="waves-effect waves-light btn">Click Me!</a>
        </div>
      </div>
    );
  }
}

export default App;
