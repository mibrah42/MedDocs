import React from 'react';
import {Link} from 'react-router-dom';
import './style/Navbar.css';

export default class Navbar extends React.Component {
  static propTypes = {
    // name: React.PropTypes.string,
  };
  constructor(props) {
    super(props);
  }
  // className="navbar navbar-dark bg-dark"
  // #292E33
  
  render() {
    return (
      <div>
      	<div style={{background: '#292E33', height: '60px', display: 'flex', alignItems: 'center'}}>
      		<ul className="nav">
      			<li className="nav-item">
      				<Link to="/" className="nav-link active custom-nav"> Home </Link>
      			</li>
            <li className="nav-item">
              <Link to="/hospitals" className="nav-link active custom-nav"> Hospitals </Link>
            </li>
      		</ul>
      	</div>
      </div>
    );
  }
}