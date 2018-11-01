import React from 'react';
import './styles/signIn.css';

class SignUp extends React.Component {
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
      <div className="wrapper signup" style={style}>
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
      			</div>
      		</form>
      	</div>
      </div>
    );
  }
}

export default SignUp;