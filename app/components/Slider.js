import React from 'react';

export default class SliderItem extends React.Component{
	render(){
		return(
				<li><img src={this.props.link} width="50px" height="50px" alt=""/></li>
		);
	}
}
