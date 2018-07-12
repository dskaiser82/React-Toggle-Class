import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
  isActive:true
  }

  toggleClass = (e) => {
    this.setState({isActive: !this.state.isActive})
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className="box-holder">
          <div className={(this.state.isActive) ? "box teal lighten-2 fade-in" : "box"}>Wow, Magic!
          </div>
          <a onClick={this.toggleClass} className="waves-effect waves-light btn">Click Me!</a>
        </div>
      </div>
    );
  }
}

export default App;
