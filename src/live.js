// THIS IS WHERE WE WILL IMPORT EVERYTHING ----------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CSS from './App.css';
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';
var $ = require('jquery');


// LIVE EARTH ---------------------------------------------------------------------------------------------------------------
var LiveEarth = React.createClass({
	render: function() {
		return (
			<div>
			<div className="liveDiv">	

				<div className="info">
					<center><h1 id="liveheading">The Earth- Live from the International Space Station</h1></center>
				</div>
				
				{
					// --------------------------------THE ACTUAL VIDEO DIV--------------------------------
				}

				<div className="videoDiv">
					<iframe width="100%" height="100%" src="https://www.youtube.com/embed/SF7FUU7CThs" frameborder="0" allowfullscreen></iframe>
				</div>


			</div>
				<div className="bufferTwo">
					<div id="logoandcourtesy">
						<center><h1 id="courtof"><span id="courtspan">Courtesy of</span><strong>National Aeronautical & Space Administration</strong></h1></center>
						<center><img src="http://vector.me/files/images/1/3/13605/nasa.png" className="img-responsive" role="presentation" id="nasalogo" /></center>
					</div>
				</div>
			</div>
		)
	}
})

// EXPORT THE LIVE EARTH MODULE ----------------------------------------------------------------------------------------------
export default LiveEarth;