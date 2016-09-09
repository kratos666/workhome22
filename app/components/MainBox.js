import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
class MainBox extends React.Component{
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
									<li><img src="http://lorempixel.com/50/50/cats" width="50px" height="50px" alt=""/></li>
									<li><img src="http://lorempixel.com/50/50/cats" alt="" width="50px" height="50px"/></li>
									<li><img src="http://lorempixel.com/50/50/cats" alt="" width="50px" height="50px"/></li>
									<li><img src="http://lorempixel.com/50/50/" alt="" width="50px" height="50px"/></li>
									<li><img src="http://lorempixel.com/50/50/" alt="" width="50px" height="50px"/></li>
									<li><img src="http://lorempixel.com/50/50/people" alt="" width="50px" height="50px"/></li>
									<li><img src="http://lorempixel.com/50/50/cats" alt="" width="50px" height="50px"/></li>
									<li><img src="http://lorempixel.com/50/50/cats" alt="" width="50px" height="50px"/></li>
									<li><img src="http://lorempixel.com/50/50/cats" alt="" width="50px" height="50px"/></li>
									<li><img src="http://lorempixel.com/50/50/cats" alt="" width="50px" height="50px"/></li>
									<li><img src="http://lorempixel.com/50/50/cats" alt="" width="50px" height="50px"/></li>
									<li><img src="http://lorempixel.com/50/50/cats" alt="" width="50px" height="50px"/></li>
									<li><img src="http://lorempixel.com/50/50/cats" alt="" width="50px" height="50px"/></li>
									<li><img src="http://lorempixel.com/50/50/cats" alt="" width="50px" height="50px"/></li>
									<li><img src="http://lorempixel.com/50/50/cats" alt="" width="50px" height="50px"/></li>
									<li><img src="http://lorempixel.com/50/50/cats" alt="" width="50px" height="50px"/></li>
									<li><img src="http://lorempixel.com/50/50/cats" alt="" width="50px" height="50px"/></li>
									<li><img src="http://lorempixel.com/50/50/cats" alt="" width="50px" height="50px"/></li>
									<li><img src="http://lorempixel.com/50/50/cats" alt="" width="50px" height="50px"/></li>
									<li><img src="http://lorempixel.com/50/50/people" alt="" width="50px" height="50px"/></li>
									<li><img src="http://lorempixel.com/50/50/cats" alt="" width="50px" height="50px"/></li>
								</ul>
							</div>
							<h1>Say Hi & Get in Touch</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.
							</p>
							<div className="social flex">
								<ul className="flex">
									<li><a href="" className="twit"></a></li>
									<li><a href="" className="face"></a></li>
									<li><a href="" className="uho"></a></li>
									<li><a href="" className="googl"></a></li>
									<li><a href="" className="in"></a></li>
									<li><a href="" className="tube"></a></li>
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
ReactDOM.render(<MainBox />, document.getElementById('app'))
