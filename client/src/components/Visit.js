import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Visit = (props) => {
	const style = {
		background: '#ecf0f1',
		width: '100%',
		padding: '30px',
		borderRadius: '5px',
		margin: '10px 0px 20px 0px',
		minHeight: '150px',
		boxShadow: "2px 2px 10px -5px rgba(0,0,0,0.75)"
	};
	let pdfComponent = <div></div>
	if(props.pdf) {
		pdfComponent = (<embed 
				   style={{marginTop: '10px'}}
				   src={props.pdf}
		   		   type="application/pdf"
		           width="100%"
		           height="500px"/>);
	} 

	return (
		<div style={style}>
		<div style={{display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem'}}>
			<p><b style={{color: 'darkGray'}}>{props.visitDate}</b></p>
		 	<p>Dr. {props.doctorFname} {props.doctorLname}</p>
		</div>
		<div>
		<p><b>Notes: </b> {props.notes}</p>
		<div style={{display: 'flex', justifyContent: 'left'}}>
			<div style={{marginRight: '20px'}}>
				<p><b>Height: </b> {props.height}</p>
				<p><b>Weight: </b> {props.weight}</p>
			</div>
			<div style={{marginLeft: '20px'}}>
				<p><b>Body Temperature: </b> {props.bodyTemp}</p>
				<p><b>Heart Rate: </b> {props.heartRate}</p>
			</div>
		</div>
				<p><b>Hospital: </b> {props.hospital}</p>
		</div>
			{
				pdfComponent
			}
		</div>
	);
}


export default Visit;