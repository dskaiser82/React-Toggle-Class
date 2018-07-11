import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
  isActive:true
  }

  toggleClass = (e) => {
    console.log("Woot")
    this.setState({isActive: !this.state.isActive})
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className="box teal lighten-2">
          <a onClick={this.toggleClass} className="waves-effect waves-light btn">Click Me!</a>
        </div>
      </div>
    );
  }
}

export default App;
