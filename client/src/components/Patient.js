import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Patient = (props) => {
	const {id, fname, lname, email, image, hospitalId, doctorId} = props;
	const cardStyle = {
		width: "18rem",
		height: "360px",
		background: "#ecf0f1",
		boxShadow: "2px 2px 10px -5px rgba(0,0,0,0.75)",
		textShadow: "none",
		color: "black",
		marginTop: "30px"
	}
	const imageStyle = {
		height: "200px",
		backgroundPosition: "top",
		backgroundSize: "cover",
		width: "100%",
		backgroundImage: `url(${image})`
	}
	return (
		<div class="card text-center" style={cardStyle}>
		  <div style={imageStyle}> </div>
		  <div class="card-body">
		    <h5 class="card-title">{fname} {lname}</h5>
		    <p class="card-text">{email}</p>
		    <Link to={`/hospitals/${hospitalId}/doctors/${doctorId}/patients/${id}`} style={{textDecoration: "none"}}>
				<Button variant="contained" className="primary">
   				See Records
  			 	</Button>
			</Link>
		  </div>
		</div>
	);
}


export default Patient;