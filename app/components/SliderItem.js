import React from 'react';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import Firebase from 'firebase';
import SliderItems from './SliderItems'


export default class SliderItem extends React.Component{
	constructor(){
		super();
		this.state ={
			slider: []
		}
	}
	componentDidMount(){
		this.bindAsArray(Firebase.database().ref().child("slider"), "slider");
	}
	render(){
		return(
			<div className="slides">
				<ul className="flex">
					{
						this.state.slider.map((item, index) => <SliderItems key={index} link={item.link} /> )
					}
				</ul>
			</div>
		);
	}
}
ReactMixin(SliderItem.prototype, ReactFire);
