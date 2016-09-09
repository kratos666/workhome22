import React from 'react';

export default class Header extends React.Component{
	render(){
		return(
			<div className="header-wrap flex">
			<div className="logo-block flex">
				<a href="#" className="logo">Notify<strong>.</strong></a>
				<p className="slogan">A great new free psd theme to showcase <br/> your new application.</p>
				<ul className="select-os flex">
					<li ><a href="#" className="mac-os"></a></li>
					<li ><a href="#" className="andr-os"></a></li>
					<li ><a href="#" className="win-os"></a></li>
				</ul>
			</div>
			<div className="phone">
				<div className="pic-phone"></div>
			</div>
		</div>
		)
	}
}
