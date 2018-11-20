import React from 'react';
import Hospital from './Hospital';
import bannerImage from './images/records.jpg';
import Button from '@material-ui/core/Button';
import './style/Home.css';
import {Link} from 'react-router-dom';

class Hospitals extends React.Component {
	static propTypes = {
    // name: React.PropTypes.string,
};

constructor(props) {
	super(props);
	this.state = {
		hospitals: []
	}
}

componentWillMount() {
	var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'http://localhost:3003/hospitals';
	fetch(proxyUrl + targetUrl)
      .then(response => {
        console.log(response);
        response.json();
      })
      .then((data) => { 
        console.log(data);
        // this.setState({ hospitals }); 
      })
      .catch((err) => {
      	console.log(err);
      })
	
}


render() {
	return (
		<div className="wrapper" style={{minHeight: "calc(100vh - 150px)", padding: "50px"}}>
			<div className="container">
				<h1 style={{marginLeft: '20px'}}>Hospitals</h1>
				<div className="row">
					{
						this.state.hospitals.map(hospital => {
							return (<div className="col-xs-12 col-sm-4">
										<Hospital key={hospital.Hospital_ID}
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