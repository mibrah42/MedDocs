import React from 'react';
import bannerImage from '../images/records.jpg';
import './styles/Home.css';

class Home extends React.Component {
	static propTypes = {
    // name: React.PropTypes.string,
};

constructor(props) {
	super(props);
}


render() {
	const style = {
		backgroundImage: `linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 10%), url(${bannerImage})`,
		minHeight: 'calc(100vh - 150px)'
	};
	const contentStyle = {
		display: 'flex'
	};

	return (
		<div>	
			<div className="banner" style={style}>
				<div className="content-header text-left" style={contentStyle}>	
					<div className="left-content">
						<h1 id="title"> MedDocs </h1>
						<h3 id="subtitle"> Keep your medical reords secure and accessible</h3>
					</div>
					<div className="signIns"> 
						<SignIn title="Doctor" background="#dfe6e9" login={this.props.isLoggedIn} />
					</div>
				</div>
			</div>

		</div>
		);
}
}

export default Home;