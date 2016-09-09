import React from 'react';

export default class Footer extends React.Component{
	render(){
		return(
			<div className="footer-wrap">
				<ul className="flex">
					<li><a href="#">Contact</a></li>
					<li><a href="#">Download</a></li>
					<li><a href="#">Press</a></li>
					<li><a href="#">Email</a></li>
					<li><a href="#">Support</a></li>
					<li><a href="#">Privacy Policy</a></li>
				</ul>
			</div>
		)
	}
}
