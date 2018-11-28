import React from 'react';
import bannerImage from './images/records.jpg';
import Button from '@material-ui/core/Button';
import './style/Home.css';
import {Link,Route, NavLink, Redirect} from 'react-router-dom';
import Doctor from './Doctor';

class Doctors extends React.Component {
	
constructor(props) {
	super(props);
	this.state = {
		doctors: [],
		specialties: []
	}
	this.handleFilterSpecialty = this.handleFilterSpecialty.bind(this);
	this.loadAllDoctors = this.loadAllDoctors.bind(this);
	this.loadSpecialties = this.loadSpecialties.bind(this);
}

componentWillMount() {
	this.loadAllDoctors();
	this.loadSpecialties();
}
loadAllDoctors(){
	const {match} = this.props;
	fetch(`/hospital/${match.params.hospital_id}/doctors`)
      .then(response => response.json())
      .then((doctors) => { 
        this.setState({ doctors }); 
      })
      .catch((err) => {
      	console.log(err);
      })
}

loadSpecialties() {
	fetch(`/doctors/specialties`)
      .then(response => response.json())
      .then((specialties) => { 
        this.setState({ specialties }); 
        console.log(specialties)
      })
      .catch((err) => {
      	console.log(err);
      })
}

handleFilterSpecialty(e) {
	console.log("hello");
	if(e.target.value === 'all') {
		this.loadAllDoctors();
		return;
	}
	console.log("hello");
	const {match} = this.props;
	fetch(`/hospital/${match.params.hospital_id}/doctors/specialty/${e.target.value}`)
      .then(response => response.json())
      .then((doctors) => { 
      	console.log(doctors)
        this.setState({ doctors }); 
      })
      .catch((err) => {
      	console.log(err);
      })

}


render() {
	const {match} = this.props;
	return (
		<div className="wrapper" style={{minHeight: "calc(100vh - 150px)", padding: "50px"}}>
			<Link to={`/hospitals`} style={{textDecoration: "none", float: 'left'}}>
				<Button variant="extendedFab" 
						className="primary"
						style={{ boxShadow: "2px 4px 10px -5px rgba(0,0,0,0.75)"}}>
   				Back to hospitals
  			 	</Button>
			</Link>
			<div className="container">
			<div style={{marginRight: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
			<h1>Doctors</h1>
			<select style={{width: '300px', marginRight: '30px'}}
						className="form-control"
						onChange={(e) => this.handleFilterSpecialty(e)}>
						<option value="" disabled selected>Filter By Speciality</option>
						<option value="all">All</option>
						{
							this.state.specialties.map(speciality => {
								return (<option value={speciality.Speciality}>
										{speciality.Speciality}
									</option>)
	      					})
						}
			</select>
			</div>

				<div className="row">
					
				{
						this.state.doctors.map(doctor => {
							return (<div className="col-xs-12 col-sm-4">
										<Doctor key={doctor.id}
												  id={doctor.Doc_ID}
												  fname={doctor.Doc_F_Name}
												  lname={doctor.Doc_L_Name}
												  hospitalId={match.params.hospital_id}
												  image={doctor.Profile_IMG} 
												  speciality={doctor.Speciality}
												  email={doctor.Doc_Email}
												  Phone_Num={doctor.Doc_Email}
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

export default Doctors;