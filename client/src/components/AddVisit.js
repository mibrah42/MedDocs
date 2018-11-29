import React from 'react';
import Button from '@material-ui/core/Button';
import './style/form.css';
import {Link, Redirect} from 'react-router-dom'

export default class AddVisit extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			height: '',
			weight: '',
			notes: '',
			bodyTemp: '',
			heartRate: '',
			pdf: '',
			patientId: '',
			completed: false,
			date: '',
			issues: [],
			patients: []
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
	const url = "YOUR_API_KEY"
	const {match} = this.props;
	fetch(`/patients`)
      .then(response => response.json())
      .then((patients) => {
        this.setState({ patients: patients, patientId: patients[0].Pat_ID.toString() }); 
      })
      .catch((err) => {
      	console.log(err);
      })
      fetch(url)
      .then(response => response.json())
      .then((issues) => {
      	console.log(issues);
        this.setState({ issues, notes: issues[0] }); 
      })
      .catch((err) => {
      	console.log(err);
      })
	}

	handleSubmit(e) {
  	e.preventDefault();
  	const {match} = this.props;
  	const hospitalId = match.params.hospital_id;
  	const doctorId = match.params.doctor_id;
  	fetch('/visits/new', {
	  method: 'post',
	  headers: {
	    'Accept': 'application/json, text/plain, */*',
	    'Content-Type': 'application/json'
	  },
	  body: JSON.stringify({
	  	height: this.state.height,
	  	weight: this.state.weight,
	  	notes: this.state.notes,
	  	date: this.state.date,
	  	bodyTemp: this.state.bodyTemp,
	  	heartRate: this.state.heartRate,
	  	pdf: this.state.pdf,
	  	doctorId: doctorId,
	  	hospitalId: hospitalId,
	  	patientId: this.state.patientId
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
				<h1 className="text-center">Add Visit</h1>
				<form className="form-group" 
      		 		  onSubmit={(e) => this.handleSubmit(e)}>
      		 	<label htmlFor="notes">Notes</label>
				<select className="form-control"
	      				name="notes"
	      				onChange={(e) => this.setState({[e.target.name]: e.target.value })}
	      				required>
	      			{
	      				this.state.issues.map(issue => {
							return (<option value={issue.Name}>
										{issue.Name}
									</option>)
	      				})
	      			}
	      		</select>
		      		
		      		<label htmlFor="height">Height</label>
		      		<input className="form-control" 
		      			   type="text" 
		      			   name="height" 
		      			   onChange={(e) => this.setState({[e.target.name]: e.target.value })}
		      			   value={this.state.height}
		      			   required/>
		      		<label htmlFor="weight">Weight</label>
		      		<input className="form-control" type="text" name="weight" 
		      			   onChange={(e) => this.setState({[e.target.name]: e.target.value })}
		      			   value={this.state.weight}
		      			   required/>
		      		<label htmlFor="date">Visit Date</label>
		      		<input className="form-control" 
		      			   type="date" 
		      			   name="date" 
		      			   onChange={(e) => this.setState({[e.target.name]: e.target.value })}
		      			   value={this.state.date}
		      			   required/>
		      		<label htmlFor="bodyTemp">Body Temperature</label>
		      		<input className="form-control" 
		      			   type="text" 
		      			   name="bodyTemp" 
		      			   onChange={(e) => this.setState({[e.target.name]: e.target.value })}
		      			   value={this.state.bodyTemp}
		      			   required/>
		      		<label htmlFor="heartRate">Heart Rate</label>
		      		<input className="form-control" 
		      			   type="text" 
		      			   name="heartRate" 
		      			   onChange={(e) => this.setState({[e.target.name]: e.target.value })}
		      			   value={this.state.heartRate}
		      			   required/>
		      		<label htmlFor="pdf">PDF</label>
		      		<input className="form-control" 
		      			   type="text" 
		      			   name="pdf" 
		      			   onChange={(e) => this.setState({[e.target.name]: e.target.value })}
		      			   value={this.state.pdf}
		      			   required/>
		      		<label htmlFor="patient">Patient</label>
		 			<select className="form-control"
	      				name="patientId"
	      				onChange={(e) => this.setState({[e.target.name]: e.target.value })}
	      				required>
	      			{
	      				this.state.patients.map(patient => {
							return (<option value={patient.Pat_ID}>
										{patient.Pat_F_Name} {patient.Pat_L_Name}
									</option>)
	      				})
	      			}
	      		</select>
		      		<Button variant="contained"
		      				style={{marginTop: '20px'}}
		      				className="primary form-control"
		      				onClick={(e) => this.handleSubmit(e)}>Add Visit</Button>
      			</form>
			</div>
			</div>
		);
	}
}
