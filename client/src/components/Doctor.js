import React from 'react';
import './style/Doctor.css';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Doctor = (props) => {
	const {image, fname, lname, speciality, id, hospitalId} = props;
	const cardStyle = {
		width: "18rem",
		height: "320px",
		background: "#ecf0f1",
		boxShadow: "2px 2px 10px -5px rgba(0,0,0,0.75)",
		textShadow: "none",
		color: "black",
		marginTop: "30px"
	}
	const imageStyle = {
		height: "160px",
		backgroundPosition: "top",
		backgroundSize: "cover",
		width: "100%",
		backgroundImage: `url(${image})`
	}
	return (
		<div className="card text-center" style={cardStyle}>
		    <div style={imageStyle}> </div>
		    <h5 className="card-title" style={{marginTop: '10px'}}>{fname} {lname}</h5>
		    <p className="card-text">{speciality}</p>
		    <Link to={`/hospitals/${hospitalId}/doctors/${id}/patients`} style={{textDecoration: "none"}}>
				<Button variant="contained" className="primary">
   				See Patients
  			 	</Button>
			</Link>
		  </div>
		
	);
}


export default Doctor;