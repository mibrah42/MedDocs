import React from 'react';
import Button from '@material-ui/core/Button';
import Patient from './Patient';
import {Link,Route, NavLink, Redirect} from 'react-router-dom';

class Patients extends React.Component {
	static propTypes = {
    // name: React.PropTypes.string,
};

constructor(props) {
	super(props);
	this.state = {
		doctor: {
				id: "1234",
				fname: "Steven",
				lname: "strange",
				image: "https://media.comicbook.com/2016/10/doctor-strange-1-204810-1280x0.jpg",
				speciality: "surgeon"
		},
		patients: [
			{
				id: "1234",
				fname: "bill",
				lname: "gates",
				image: "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg",
				email: "bill@gates.com"
			},
			{
				id: "1234",
				fname: "bill",
				lname: "gates",
				image: "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg",
				email: "bill@gates.com"
			},
			{
				id: "1234",
				fname: "bill",
				lname: "gates",
				image: "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg",
				email: "bill@gates.com"
			},
			{
				id: "1234",
				fname: "bill",
				lname: "gates",
				image: "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg",
				email: "bill@gates.com"
			},
			{
				id: "1234",
				fname: "bill",
				lname: "gates",
				image: "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg",
				email: "bill@gates.com"
			},
			{
				id: "1234",
				fname: "bill",
				lname: "gates",
				image: "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg",
				email: "bill@gates.com"
			}
		]
	}
}

render() {
	const {match} = this.props;
	const doctor = this.state.doctor;
	const doctorStyle = {
		borderRadius: '50%',
		backgroundImage: `url(${doctor.image})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		height: '200px',
		width: '200px',
		margin: '0 auto'
	};
	return (
		<div className="wrapper" style={{minHeight: "calc(100vh - 150px)", padding: "50px"}}>
			<div className="text-center"> 
				<div style={doctorStyle}></div>
				<h5 class="card-title" style={{marginTop: '10px'}}>{doctor.fname} {doctor.lname}</h5>
		    	<p class="card-text">{doctor.speciality}</p>
			</div>
			<div className="container " style={{marginTop: '30px'}}>
				<div style={{display: 'flex', justifyContent: 'space-between'}}> 
					<h2 style={{marginLeft: '30px'}}>Patients</h2>
					<Link to={`/hospitals/${match.params.hospital_id}/doctors/${match.params.doctor_id}/patients/new`} style={{textDecoration: "none"}}>
						<Button variant="extendedFab" 
								aria-label="Delete"
								style={{marginRight: '30px', boxShadow: "2px 4px 10px -5px rgba(0,0,0,0.75)"}}>
		        		+ Add patient
		      			</Button>
	      			</Link>
      			</div>
				<div className="row">
					{
						this.state.patients.map(patient => {
							return (<div className="col-xs-12 col-sm-4" style={{display: 'flex', justifyContent: 'center'}}>
										<Patient  
												  key={patient.id}
												  id={patient.id}
												  fname={patient.fname}
												  lname={patient.lname}
												  hospitalId={match.params.hospital_id}
												  doctorId={match.params.doctor_id}
												  image={patient.image} 
												  email={patient.email}
												  />
									</div>)
						})
					}
					
				</div>
			</div>
		</div>
		);
}
}

export default Patients;