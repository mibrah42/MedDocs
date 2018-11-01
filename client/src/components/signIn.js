import React from 'react';
import { Link } from 'react-router-dom';
import './styles/signIn.css';

class SignIn extends React.Component {
  static propTypes = {
    // name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
  	e.preventDefault();
  }

  render() {
  	const {title, background} = this.props;
  	const style = {
  		backgroundColor: background
  	}
    return (
      <div className="wrapper" style={style}>
      	<div className="login-form">
      		<h3>{title}</h3>
      		<form onSubmit={this.handleSubmit.bind(this)}>
      			<div>
      			<input 
      				className="form-control"
      				type="text"
    				placeholder="email"
      			/>
      			<input 
      				className="form-control"
      				type="password"
    				placeholder="password"
      			/>
      			Don't have an account? <Link to={`${title.toLowerCase()}signup`} className="link active"> Signup </Link>
      			</div>
      		</form>
      	</div>
      </div>
    );
  }
}

export default SignIn;