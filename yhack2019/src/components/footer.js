import React from 'react';
import './footer.scss';

class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<div className="footer-left">Copyright &copy; 2019, HackerSquad</div>
				<div className="footer-center">
					<a href="#" target="_blank" className="fa fa-envelope-o"></a>
					<a href="#" target="_blank" className="fa fa-linkedin"></a>
					<a href="#" target="_blank" className="fa fa-instagram"></a>
			 		<a href="#" target="_blank" className="fa fa-github"></a>
				</div>
				<div className="footer-right">Made with &hearts; for YHack2019</div>
			</div>
		);
	}
}

export default Footer;