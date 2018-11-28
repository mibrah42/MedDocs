import React from 'react';
import Hospital from './Hospital';
import bannerImage from './images/records.jpg';
import Button from '@material-ui/core/Button';
import './style/Home.css';
import {Link} from 'react-router-dom';

class Hospitals extends React.Component {

constructor(props) {
	super(props);
	this.state = {
		hospitals: []
	}
this.handleFilter = this.handleFilter.bind(this);
this.loadAllHospitals = this.loadAllHospitals.bind(this);
}

componentWillMount() {
	this.loadAllHospitals();
}

loadAllHospitals() {
	fetch("/hospitals")
      .then(response => response.json())
      .then((data) => { 
        this.setState({ hospitals: data }); 
      })
      .catch((err) => {
      	console.log(err);
      })
}

handleFilter(e) {
	if(e.target.value === "all") {
		this.loadAllHospitals();
		return;
	}
	fetch(`/hospitals/location/${e.target.value.toLowerCase()}`)
      .then(response => response.json())
      .then((data) => { 
        this.setState({ hospitals: data }); 
      })
      .catch((err) => {
      	console.log(err);
      })
}

render() {
	return (
		<div className="wrapper" style={{minHeight: "calc(100vh - 150px)"}}>
			<div className="container" style={{padding: '20px', marginTop: '30px'}}>
				<div style={{marginRight: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
				<h1 style={{marginLeft: '20px'}}>Hospitals</h1>
				<select style={{width: '300px'}}
						className="form-control"
						onChange={(e) => this.handleFilter(e)}>
					<option value="" disabled selected>Filter By Location</option>
					<option value="all">All</option>
					<option value="usa">USA</option>
					<option value="canada">Canada</option>
				</select>
				</div>
				<div className="row">
					{
						this.state.hospitals.map((hospital, i) => {
							return (<div className="col-xs-12 col-sm-4">
										<Hospital key={i}
												  id={hospital.Hospital_ID}
												  name={hospital.Hospital_Name}
												  address={hospital.Hospital_Address}
												  image={hospital.Hospital_IMG} 
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

export default Hospitals;