import React from 'react';
import Button from '@material-ui/core/Button';
import Visit from './Visit';
import {Link,Route, NavLink, Redirect} from 'react-router-dom';

class Timeline extends React.Component {


constructor(props) {
	super(props);
	this.state = {
		patient: {},
		visits: []
	}
}

componentWillMount() {
	const {match} = this.props;
	fetch(`/patients/${match.params.patient_id}`)
      .then(response => response.json())
      .then((patient) => { 
        this.setState({ patient: patient[0] }); 
      })
      .catch((err) => {
      	console.log(err);
      })

	fetch(`/visits/patient/${match.params.patient_id}`)
      .then(response => response.json())
      .then((visits) => { 
      	console.log(visits);
        this.setState({ visits }); 
      })
      .catch((err) => {
      	console.log(err);
      })
}

render() {
	const {match} = this.props;
	const patient = this.state.patient;
	const patientStyle = {
		borderRadius: '50%',
		backgroundImage: `url(${patient.Profile_IMG})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		height: '200px',
		width: '200px',
		margin: '0 auto'
	};
	const infoStyle = {
		background: '#ecf0f1',
		width: '100%',
		padding: '30px',
		borderRadius: '5px',
		margin: '10px 0px 20px 0px',
		minHeight: '150px',
		boxShadow: "2px 2px 10px -5px rgba(0,0,0,0.75)",
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center'
	};
	return (
		<div className="wrapper" style={{minHeight: "calc(100vh - 150px)", padding: "50px", display: 'flex', justifyContent: 'center'}}>
			<Link to={`/hospitals/${match.params.hospital_id}/doctors/${match.params.doctor_id}/patients`} style={{textDecoration: "none", position: 'absolute', left: '50px'}}>
			<Button variant="extendedFab" 
					className="primary"
					style={{ boxShadow: "2px 4px 10px -5px rgba(0,0,0,0.75)"}}>
				Back to doctor
			 	</Button>
			</Link>
			<div>
			
				<div style={patientStyle}></div>
				<h5 class="card-title text-center" style={{marginTop: '10px'}}>{patient.Pat_F_Name} {patient.Pat_L_Name}</h5>
		    	<p class="card-text text-center">{patient.Email}</p>
		
			</div>
			<div style={{marginLeft: '100px', minWidth: '800px'}}>
				<h2>Patient Info</h2>
				<div style={infoStyle}>
				<div>
		    	<p class="card-text"><b>Gender:</b> {patient.Gender}</p>
		    	<p class="card-text"><b>Date of birth:</b> {patient.DOB}</p>
		    	<p class="card-text"><b>Age:</b> {patient.Age}</p>
		    	<p class="card-text"><b>Blood Group:</b> {patient.Blood_Grp}</p>
		    	<p class="card-text"><b>Phone number:</b> {patient.Phone_No}</p>
		    	</div>
		    	<div>
		    	<p class="card-text"><b>Address:</b> {patient.Pat_Address}</p>
		    	<p class="card-text"><b>Health card #:</b> {patient.HealthCard_Num}</p>
		    	<p class="card-text"><b>Emergency Contact:</b> {patient.Emerg_Name}</p>
		    	<p class="card-text"><b>Emergency Contact #:</b> {patient.Emerg_Contact}</p>
		    	</div>
				</div>
					<div style={{display: 'flex', justifyContent: 'space-between'}}> 
					<h2 style={{marginTop: '20px'}}>Visits</h2>
					</div>
					{
						this.state.visits.map(visit => {
							return (<Visit key={visit.id}
										  id={visit.id}
										  patientId={visit.V_Pat_ID}
										  doctorId={visit.V_Doc_ID}
										  doctorFname={visit.Doc_F_Name}
										  doctorLname={visit.Doc_L_Name}
										  visitDate={visit.V_Visit_Date.split("T")[0]}
										  height={visit.Height}
										  weight={visit.Weight}
										  notes={visit.Notes}
										  bodyTemp={visit.Body_Temp}
										  heartRate={visit.Heart_Rate}
										  pdf={visit.PDF}
										  hospital={visit.Hospital_Name}
										  />)
						})
					}
			</div>
		</div>
		);
}
}

export default Timeline;