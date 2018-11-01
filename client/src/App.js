import React, { Component } from 'react';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const RegisterUser = (props) => {

  return (
    <SignUp title={props.type} background="white" />
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/doctorsignup" exact component={() => <RegisterUser type="Doctor" />}/>
          <Route path="/patientsignup" exact render={() => <RegisterUser type="Patient" />}/>
        </Switch>
        <Footer />
      </div>
      );
    }
  }

export default App;
