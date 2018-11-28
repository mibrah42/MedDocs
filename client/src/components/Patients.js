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
		doctor: {},
		patients: []
	}
	this.LoadAllPatients = this.LoadAllPatients.bind(this);
}

componentWillMount() {
	const {match} = this.props;
	fetch(`/doctors/${match.params.doctor_id}`)
      .then(response => response.json())
      .then((doctor) => { 
        this.setState({ doctor: doctor[0] }); 
      })
      .catch((err) => {
      	console.log(err);
      })
	fetch(`/doctor/${match.params.doctor_id}/patients`)
      .then(response => response.json())
      .then((patients) => { 
        this.setState({ patients }); 
      })
      .catch((err) => {
      	console.log(err);
      })
}

LoadAllPatients(e) {
	const {match} = this.props;
	fetch(`/doctor/${match.params.doctor_id}/patients`)
      .then(response => response.json())
      .then((patients) => { 
        this.setState({ patients }); 
      })
      .catch((err) => {
      	console.log(err);
      })
}

handleFilterBloodGroup(e) {
	if(e.target.value === "all") {
		this.LoadAllPatients();
		return;
	}
	const {match} = this.props;
	fetch(`/doctor/${match.params.doctor_id}/patients/blood/${e.target.value}`)
      .then(response => response.json())
      .then((patients) => { 
        this.setState({ patients }); 
      })
      .catch((err) => {
      	console.log(err);
      })
}

render() {
	const {match} = this.props;
	const doctor = this.state.doctor;
	const doctorStyle = {
		borderRadius: '50%',
		backgroundImage: `url(${doctor.Profile_IMG})`,
		backgroundPosition: 'top',
		backgroundSize: 'cover',
		height: '200px',
		width: '200px',
		margin: '0 auto'
	};
	
	return (
		<div className="wrapper" style={{minHeight: "calc(100vh - 150px)", padding: "50px"}}>
			<Link to={`/hospitals/${match.params.hospital_id}/doctors`} style={{textDecoration: "none", float: 'left'}}>
				<Button variant="extendedFab" 
						className="primary"
						style={{ boxShadow: "2px 4px 10px -5px rgba(0,0,0,0.75)"}}>
   				Back to doctors
  			 	</Button>
			</Link>
			<div className="container " style={{marginTop: '30px'}}>
				<div style={{padding: "40px 0px", boxShadow: "2px 2px 10px -5px rgba(0,0,0,0.75)", borderRadius: '10px 10px 0px 0px', background: '#292E33', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px', width: '100%', margin: '0px 20px 50px 20'}}>
					<div className="text-center" style={{marginRight: '40px'}}> 
						<div style={doctorStyle}></div>
					</div>
					<div style={{marginRight: '40px'}}>
						<h5 class="card-title">Dr. {doctor.Doc_F_Name} {doctor.Doc_L_Name}</h5>
				    	<p class="card-text"><b>Speciality:</b> {doctor.Speciality}</p>
						<p><b>Phone number:</b> {doctor.Phone_Num}</p>
						<p><b>Email:</b> {doctor.Doc_Email}</p>
						<p><b>Address:</b> {doctor.Doc_Address}</p>
					</div>
				</div>
				<div style={{display: 'flex', justifyContent: 'space-between'}}> 
					<h2 style={{marginLeft: '30px'}}>Patients</h2>
					<div style={{display: 'flex', alignItems: 'center'}}>
					<Link to={`/hospitals/${match.params.hospital_id}/doctors/${match.params.doctor_id}/patients/${match.params.patient_id}/new`} style={{textDecoration: "none", marginRight: '20px'}}>
						<Button variant="extendedFab" 
								aria-label="Delete"
								style={{ boxShadow: "2px 4px 10px -5px rgba(0,0,0,0.75)"}}>
		        		+ Add visit
		      			</Button>
		      		</Link>

					<Link to={`/hospitals/${match.params.hospital_id}/doctors/${match.params.doctor_id}/patients/new`} style={{textDecoration: "none"}}>
						<Button variant="extendedFab" 
								aria-label="Delete"
								style={{marginRight: '30px', boxShadow: "2px 4px 10px -5px rgba(0,0,0,0.75)"}}>
		        		+ Add patient
		      			</Button>
	      			</Link>
	      			<select style={{width: '200px', marginRight: '30px'}}
						className="form-control"
						onChange={(e) => this.handleFilterBloodGroup(e)}>
						<option value="" disabled selected>Filter By Blood Group</option>
						<option value="all">All</option>
						<option value="A+">A+</option>
						<option value="A-">A-</option>
						<option value="B+">B+</option>
						<option value="B-">B-</option>
						<option value="O+">O+</option>
						<option value="O-">O-</option>
						<option value="AB+">AB+</option>
						<option value="AB-">AB-</option>
					</select>
	      			</div>
      			</div>
				<div className="row">
					{
						this.state.patients.map(patient => {
							return (<div className="col-xs-12 col-sm-4" style={{display: 'flex', justifyContent: 'center'}}>
										<Patient  key={patient.id}
												  id={patient.Pat_ID}
												  fname={patient.Pat_F_Name}
												  lname={patient.Pat_L_Name}
												  hospitalId={match.params.hospital_id}
												  doctorId={match.params.doctor_id}
												  image={patient.Profile_IMG} 
												  email={patient.Email}
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