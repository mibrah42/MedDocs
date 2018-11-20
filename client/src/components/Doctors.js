import React from 'react';
import bannerImage from './images/records.jpg';
import Button from '@material-ui/core/Button';
import './style/Home.css';
import {Link,Route, NavLink, Redirect} from 'react-router-dom';
import Doctor from './Doctor';

class Doctors extends React.Component {
	static propTypes = {
    // name: React.PropTypes.string,
};

constructor(props) {
	super(props);
	this.state = {
		doctors: [
			{
				id: "1234",
				fname: "Steven",
				lname: "strange",
				image: "https://drive.google.com/file/d/1tuunpW0e4h-UoG89tIDWGaYC5RSUDHLp",
				speciality: "surgeon"
			},
			{
				id: "1234",
				fname: "Steven",
				lname: "strange",
				image: "https://media.comicbook.com/2016/10/doctor-strange-1-204810-1280x0.jpg",
				speciality: "surgeon"
			},
			{
				id: "1234",
				fname: "Steven",
				lname: "strange",
				image: "https://media.comicbook.com/2016/10/doctor-strange-1-204810-1280x0.jpg",
				speciality: "surgeon"
			},
			{
				id: "1234",
				fname: "Steven",
				lname: "strange",
				image: "https://media.comicbook.com/2016/10/doctor-strange-1-204810-1280x0.jpg",
				speciality: "surgeon"
			}
		]
	}
}


render() {
	const {match} = this.props;
	return (
		<div className="wrapper" style={{minHeight: "calc(100vh - 150px)", padding: "50px"}}>
			<div className="container">
			<h1>Doctors</h1>
				<div className="row">
					{
						this.state.doctors.map(doctor => {
							return (<div className="col-xs-12 col-sm-4">
										<Doctor key={doctor.id}
												  id={doctor.id}
												  fname={doctor.fname}
												  lname={doctor.lname}
												  hospitalId={match.params.hospital_id}
												  image={doctor.image} 
												  speciality={doctor.speciality}
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