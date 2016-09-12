import React from 'react';

export default class SocialItem extends React.Component{
	render(){
		return(
				<li><a href={this.props.soc-url} className={this.props.soc-name}></a></li>
		);
	}
}
