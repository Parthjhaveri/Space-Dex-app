	// THIS IS WHERE WE WILL IMPORT EVERYTHING ----------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CSS from './App.css';
import Searchbox from './search.jsx'
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';
var $ = require('jquery');


var Discuss = React.createClass({
	render: function() {
		return (
			<div>
				<div className="rocket">
					<img src="https://static.pexels.com/photos/2159/flight-sky-earth-space.jpg" className="img-responsive" role="presentation"/>
				</div>

				<div className="discussdiv">	
					<div className="container">
						<center><h1 id="join">Join the discussion!</h1></center>

						<center><span className="glyphicon glyphicon-menu-down" id="downarrow"></span></center>

						<div className="row">

						  <div className="col-md-6" id="discussLeft">
						  	
						  	<form className="formform">
						  		<input type="text" placeholder="Enter your name..." className="nameinput" />
						  		
						  		<input type="text" placeholder="E-Mail address" className="emailinput" />	
						  	

						  		<input type="text" placeholder="Feel free to write a comment!" id="entercomment" maxlength="10" className="expanding"/>

						  		<button className="submitbutton">Submit</button>
						  	</form>

						  </div>

						  <div className="col-md-6" id="discussRight">
						  	<div id="discussRightbox">

						  		<div className="postdiv">
							  		<h3>Name</h3>
							  		<hr id="namehr" />
							  		<h4>This is going to be the post</h4>
						  		</div>

						  		<div className="postdiv">
							  		<h3>{}</h3>
							  		<hr id="namehr" />
							  		<h4>{}</h4>
						  		</div>

						  	</div>
						  </div>

						</div>
					</div>
				</div>
			</div>
		)
	}
})

export default Discuss;