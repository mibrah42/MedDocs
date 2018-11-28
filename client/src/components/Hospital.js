import React from 'react';
import './style/Hospital.css';
import {Link} from 'react-router-dom';

const Hospital = (props) => {
	const {image, name, address, id} = props;
	const cardStyle = {
		backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${image}')`,
		margin: "20px"
	}
	return (
		<Link to={`/hospitals/${id}/doctors`} >
		<div className="card" style={cardStyle}>
		  <div className="card-category">Popular</div>
		  <div className="card-description">
		    <h2>{name}</h2>
		    <p>{address}</p>
		  </div>
		</div>
		</Link>
	);
}


export default Hospital;