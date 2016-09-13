import React from 'react';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import Firebase from 'firebase';


export default class SliderItem extends React.Component{
	render(){
		return(
				<li><img src={this.props.link} width="50px" height="50px" alt=""/></li>
		);
	}
}
ReactMixin(SliderItem.prototype, ReactFire);
