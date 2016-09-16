
import React from 'react';

export default class SocialItems extends React.Component{
	render(){
		return(
				<li><a href={this.props.socurl} className={this.props.socname}></a></li>
		);
	}
}
