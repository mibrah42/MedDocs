import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hospitals from './components/Hospitals';
import Doctors from './components/Doctors';
import Patients from './components/Patients';
import Timeline from './components/Timeline';
import AddPatient from './components/AddPatient';
import AddVisit from './components/AddVisit';

import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/hospitals/:hospital_id/doctors/:doctor_id/patients/:patient_id/new" component={AddVisit} />
          <Route exact path="/hospitals/:hospital_id/doctors/:doctor_id/patients/new" component={AddPatient} />
          <Route exact path="/hospitals/:hospital_id/doctors/:doctor_id/patients/:patient_id" component={Timeline} />
          <Route exact path="/hospitals/:hospital_id/doctors/:doctor_id/patients" component={Patients} />
          <Route exact path="/hospitals/:hospital_id/doctors" component={Doctors} />
          <Route exact path="/hospitals" component={Hospitals} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer/>
      </div>
      );
  }
}

export default App;

