import React from 'react';
import './styles/Footer.css';

const Footer = (props) => {
	return (
		<div className="footer">
			<div className="footer-links">
				<a href="#"><i className="fab fa-github"></i></a>
				<a href="#"><i className="fab fa-instagram"></i></a>
				<a href="#"><i className="fab fa-facebook"></i></a>
				<a href="#"><i className="fab fa-twitter"></i></a>
				<a href="#"><i className="fab fa-linkedin"></i></a>
			</div>
			<div className="footer-copyright">
			Made with <i className="fa fa-heart"></i> at UOIT
			</div>
		</div>
		);
}

export default Footer;