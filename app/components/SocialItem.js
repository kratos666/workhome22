import React from 'react';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import Firebase from 'firebase';
import SocialItems from './SocialItems'


export default class SocialItem extends React.Component{
	constructor(){
		super();
		this.state ={
			social: []
		}
	}
	componentDidMount(){
		this.bindAsArray(Firebase.database().ref().child("social"), "social");
	}
	render(){
		return(
			<div className="social flex">
				<ul className="flex">
					{
						this.state.social.map((item, index) => <SocialItems key={index} socname={item.name} socurl={item.url} /> )
					}
				</ul>
			</div>
		);
	}
}
ReactMixin(SocialItem.prototype, ReactFire);
