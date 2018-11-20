import React from 'react';
import Button from '@material-ui/core/Button';
import Visit from './Visit';
import {Link,Route, NavLink, Redirect} from 'react-router-dom';

class Timeline extends React.Component {
	static propTypes = {
    // name: React.PropTypes.string,
};

constructor(props) {
	super(props);
	this.state = {
		patient: {
				id: "1234",
				fname: "bill",
				lname: "gates",
				image: "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg",
				email: "bill@gates.com"
			},
		visits: [
			{
				id: "1234",
				patientId: "1",
				doctorId: "2",
				visitDate: "Nov 10, 2018",
				pdf: "/static/media/xray.f16f422c.pdf"
			},
			{
				id: "1234",
				patientId: "1",
				doctorId: "2",
				visitDate: "Nov 10, 2018",
				pdf: "/static/media/xray.f16f422c.pdf"
			}
		]
	}
}

render() {
	const {match} = this.props;
	const patient = this.state.patient;
	const patientStyle = {
		borderRadius: '50%',
		backgroundImage: `url(${patient.image})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		height: '200px',
		width: '200px',
		margin: '0 auto'
	};
	return (
		<div className="wrapper" style={{minHeight: "calc(100vh - 150px)", padding: "50px", display: 'flex', justifyContent: 'center'}}>
			<div className="text-center"> 
				<div style={patientStyle}></div>
				<h5 class="card-title" style={{marginTop: '10px'}}>{patient.fname} {patient.lname}</h5>
		    	<p class="card-text">{patient.email}</p>
			</div>
			<div className="" style={{marginLeft: '100px', minWidth: '800px'}}>
					<div style={{display: 'flex', justifyContent: 'space-between'}}> 
					<h2>Visits</h2>
					<Link to={`/hospitals/${match.params.hospital_id}/doctors/${match.params.doctor_id}/patients/${match.params.patient_id}/new`} style={{textDecoration: "none"}}>
						<Button variant="extendedFab" 
								aria-label="Delete"
								style={{ boxShadow: "2px 4px 10px -5px rgba(0,0,0,0.75)"}}>
		        		+ Add visit
		      			</Button>
		      		</Link>
      			</div>
					{
						this.state.visits.map(visit => {
							return (<Visit key={visit.id}
												  id={visit.id}
												  patientId={visit.patientId}
												  doctorId={visit.doctorId}
												  visitDate={visit.visitDate}
												  pdf={visit.pdf}
												  />)
						})
					}
			</div>
		</div>
		);
}
}

export default Timeline;