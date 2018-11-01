import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Navbar.css';

export default class Navbar extends React.Component {
  static propTypes = {
    // name: React.PropTypes.string,
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      	<nav className="navbar navbar-dark bg-dark">
		<ul className="nav">
			<li className="nav-item">
				<Link to="/" className="nav-link active custom-nav"> Home </Link>
			</li>
			<li className="nav-item">
				<Link to="/doctorsignup" className="nav-link active custom-nav"> Doctor Signup </Link>
			</li>
			<li className="nav-item">
				<Link to="/patientsignup" className="nav-link active custom-nav"> Patient Signup </Link>
			</li>
		</ul>
		</nav>
      </div>
    );
  }
}