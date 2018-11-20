import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
// import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
       <h1>Hello world</h1>
      </div>
    );
  }
}

export default App;
