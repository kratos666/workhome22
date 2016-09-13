import React from 'react';
import ReactDOM from 'react-dom';
import Firebase from 'firebase';
import Header from './Header';
import Footer from './Footer';
import SliderItem from './SliderItem';
import SocialItem from './SocialItem';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';

var config = {
	apiKey: "PLfP7pGmTTrFGagZt8UFI78x3UwuN4z7ysjUhAnI",
	databaseURL:"https://hillel-23.firebaseio.com"
}
Firebase.initializeApp(config);
class MainBox extends React.Component{
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
		return (
			<div className="wrapper">
			<header><Header/></header>

				<section>
					<div className="block-wrapper">
						<div id="features" className="flex">
							<div className="features-item flex">
								<i className="setting"></i>
								<h3>Editable Theme</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla.</p>
							</div>
							<div className="features-item flex">
								<i className="star"></i>
								<h3>Flat Design</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla.</p>
							</div>
							<div className="features-item flex">
								<i className="eart"></i>
								<h3>Reach Your Audience</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla.</p>
							</div>
						</div>
					</div>
					<div className="block-wrapper bg-color-1">
						<div id="get-notified" className="flex">
							<div className="block-form">
								<h3>Get Notified Of Any Updates!</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta deserunt blanditiis dignissimos ex voluptas, perferendis iure natus consequuntur fugit dolor, earum error! Consequuntur enim maxime blanditiis provident magni corporis asperiores.</p>
								<form action="post">
									<div className="input-style">
										<input type="text" placeholder="Emale Address"/>
										<button type="submit">Notify</button>
									</div>
								</form>
							</div>
							<div className="player">
								<video src="https://www.youtube.com/watch?feature=player_embedded&v=q2fEXkg0py4"  controls="controls"></video>
							</div>
						</div>
					</div>
					<div className="block-wrapper">
						<div id="testimonials" className="flex">
							<blockquote>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed totam quos ea sint neque debitis eum, animi nemo assumenda dicta impedit facilis in, consequuntur beatae quod! Officiis suscipit, dolores. Aperiam."</blockquote>
							<span>Jane Hunt</span>
						<div className="slides">
							<ul className="flex">
								{
									this.state.slider.map((item, index) => <SliderItem key={index} link={item.link} />)
								}
							</ul>
						</div>
							<h1>Say Hi & Get in Touch</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.
							</p>
							<div className="social flex">
								<ul className="flex">

								</ul>
							</div>
						</div>
					</div>
				</section>
				<footer className="bg-color-1">
					<Footer />
				</footer>
			</div>
		)
	}
}
ReactMixin(MainBox.prototype, ReactFire);
ReactDOM.render(<MainBox />, document.getElementById('app'));

