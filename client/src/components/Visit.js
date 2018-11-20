import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Visit = (props) => {
	const {id, patientId, doctorId, visitDate, pdf} = props;
	const style = {
		background: '#ecf0f1',
		width: '100%',
		padding: '30px',
		borderRadius: '5px',
		margin: '20px 0px',
		minHeight: '150px',
		boxShadow: "2px 2px 10px -5px rgba(0,0,0,0.75)"
	};
	return (
		<div style={style}>
		<div style={{display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem'}}>
			<p>Date: {visitDate}</p>
		 	<p>Dr. Steven Strange</p>
		</div>
			<embed src="https://res.cloudinary.com/krav/image/upload/v1542736181/3520180506.pdf"
		   		   type="application/pdf"
		           width="100%"
		           height="500px"/>	
		</div>
	);
}


export default Visit;