import React from 'react';
import Button from '@material-ui/core/Button';
import './style/form.css';
import {Link, Redirect} from 'react-router-dom';

export default class AddPatient extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	fname: '',
    	lname: '',
    	image: '',
    	gender: 'M',
    	dob: '',
    	age: '',
    	phone: '',
    	address: '',
    	email: '',
    	password: '',
    	healthcard: '',
    	emergencyName: '',
    	emergencyContact: '',
    	primaryDoc: '6',
    	bloodGroup: 'A+',
    	doctors: [],
    	completed: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
	const {match} = this.props;
	fetch(`/doctors`)
      .then(response => response.json())
      .then((doctors) => { 
        this.setState({ doctors }); 
      })
      .catch((err) => {
      	console.log(err);
      })
}

  handleSubmit(e) {
  	e.preventDefault();
  	fetch('/patients/new', {
	  method: 'post',
	  headers: {
	    'Accept': 'application/json, text/plain, */*',
	    'Content-Type': 'application/json'
	  },
	  body: JSON.stringify({
	  	fname: this.state.fname,
	  	lname: this.state.lname,
	  	image: this.state.image,
	  	gender: this.state.gender,
    	dob: this.state.dob,
    	age: this.state.age,
    	phone: this.state.phone,
    	address: this.state.address,
    	email: this.state.email,
    	password: this.state.password,
    	healthcard: this.state.healthcard,
    	emergencyName: this.state.emergencyName,
    	emergencyContact: this.state.emergencyContact,
    	primaryDoc: this.state.primaryDoc,
    	bloodGroup: this.state.bloodGroup
	  })
	}).then(res=>res.json())
	  .then(res => this.setState({completed: true}));
  }

  render() {
  	const {match} = this.props;
  	if(this.state.completed) {
  		const redirectString = `/hospitals/${match.params.hospital_id}/doctors/${match.params.doctor_id}/patients`;
    	return <Redirect to={redirectString} />;
  	}
    const wrapperStyle = {
			minHeight: 'calc(100vh - 170px)',
			padding: '50px'
		}
	return (
		<div style={wrapperStyle}>
		<Link to={`/hospitals/${match.params.hospital_id}/doctors/${match.params.doctor_id}/patients`} style={{textDecoration: "none", float: 'left'}}>
				<Button variant="extendedFab" 
						className="primary"
						style={{ boxShadow: "2px 4px 10px -5px rgba(0,0,0,0.75)"}}>
   				Back to doctor
  			 	</Button>
			</Link>
		<div className="container" style={{maxWidth: '600px'}}>
			<h1 className="text-center">Add Patient</h1>
			<form className="form-group" 
  		 		  onSubmit={(e) => this.handleSubmit(e)}>
	      		<label htmlFor="fname">First Name</label>
	      		<input className="form-control" 
	      			   type="text" 
	      			   name="fname" 
	      			   onChange={(e) => this.setState({[e.target.name]: e.target.value })}
	      			   value={this.state.fname}
	      			   required/>
	      		<label htmlFor="lname">Last Name</label>
	      		<input className="form-control" type="text" name="lname" 
	      			   onChange={(e) => this.setState({[e.target.name]: e.target.value })}
	      			   value={this.state.lname}
	      			   required/>
	      		<label htmlFor="image">Image</label>
	      		<input className="form-control" 
	      			   type="text" 
	      			   name="image" 
	      			   onChange={(e) => this.setState({[e.target.name]: e.target.value })}
	      			   value={this.state.image}
	      			   required/>
	      		<label htmlFor="gender">Gender</label>
	      		<select className="form-control" 
	      			    type="text" 
	      			    name="gender" 
	      			    onChange={(e) => this.setState({[e.target.name]: e.target.value })}
	      			  	required>
	      			  	<option value="M">M</option>
	      			  	<option value="F">F</option>
	      		</select>
	      		<label htmlFor="dob">Date of Birth</label>
	      		<input className="form-control" 
	      			   type="date" 
	      			   name="dob" 
	      			   onChange={(e) => this.setState({[e.target.name]: e.target.value })}
	      			   value={this.state.dob}
	      			   required/>
	      		<label htmlFor="age">Age</label>
	      		<input className="form-control" 
	      			   type="number" 
	      			   min="0"
	      			   max="130"
	      			   name="age" 
	      			   maxlength="3"
	      			   onChange={(e) => this.setState({[e.target.name]: e.target.value })}
	      			   value={this.state.age}
	      			   required/>
	      		<label htmlFor="phone">Phone</label>
	      		<input className="form-control" 
	      			   type="text" 
	      			   name="phone" 
	      			   onChange={(e) => this.setState({[e.target.name]: e.target.value })}
	      			   value={this.state.phone}
	      			   required/>
	      		<label htmlFor="address">Address</label>
	      		<input className="form-control" 
	      			   type="text" 
	      			   name="address" 
	      			   onChange={(e) => this.setState({[e.target.name]: e.target.value })}
	      			   value={this.state.address}
	      			   required/>
	      		<label htmlFor="email">Email</label>
	      		<input className="form-control" 
	      			   type="text" 
	      			   name="email" 
	      			   onChange={(e) => this.setState({[e.target.name]: e.target.value })}
	      			   value={this.state.email}
	      			   required/>
	      		<label htmlFor="healthcard">Health Card Number</label>
	      		<input className="form-control" 
	      			   type="text" 
	      			   name="healthcard" 
	      			   onChange={(e) => this.setState({[e.target.name]: e.target.value })}
	      			   value={this.state.healthcard}
	      			   required/>
	      		<label htmlFor="emergencyName">Emergency Name</label>
	      		<input className="form-control" 
	      			   type="text" 
	      			   name="emergencyName" 
	      			   onChange={(e) => this.setState({[e.target.name]: e.target.value })}
	      			   value={this.state.emergencyName}
	      			   required/>
	      		<label htmlFor="emergencyContact">Emergency Contact</label>
	      		<input className="form-control" 
	      			   type="text" 
	      			   name="emergencyContact" 
	      			   onChange={(e) => this.setState({[e.target.name]: e.target.value })}
	      			   value={this.state.emergencyContact}
	      			   required/>
	      		<label htmlFor="primaryDoc">Primary Doctor</label>
	      		<select className="form-control"
	      				name="primaryDoc"
	      				onChange={(e) => this.setState({[e.target.name]: e.target.value })}
	      				required>
	      			{
	      				this.state.doctors.map(doctor => {
							return (<option value={doctor.Doc_ID}>
										{doctor.Doc_F_Name} {doctor.Doc_L_Name}
									</option>)
	      				})
	      			}
	      		</select>
	      		<label htmlFor="bloodGroup">Blood Group</label>
	      		<select className="form-control" 
	      			   type="text" 
	      			   name="bloodGroup" 
	      			   onChange={(e) => this.setState({[e.target.name]: e.target.value })}
	      			   required>
	      			   <option value="A+">A+</option>
	      			   <option value="A-">A-</option>
	      			   <option value="B+">B+</option>
	      			   <option value="B-">B-</option>
	      			   <option value="O+">O+</option>
	      			   <option value="O-">O-</option>
	      			   <option value="AB+">AB+</option>
	      			   <option value="AB-">AB-</option>
	      		</select>
	      		<Button variant="contained"
	      				style={{marginTop: '20px'}}
	      				className="primary form-control"
	      				onClick={(e) => this.handleSubmit(e)}>Add Patient</Button>
  			</form>
		</div>
		</div>
    );
  }
}