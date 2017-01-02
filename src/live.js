// THIS IS WHERE WE WILL IMPORT EVERYTHING ----------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CSS from './App.css';
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';
var $ = require('jquery');


// LIVE EARTH ---------------------------------------------------------------------------------------------------------------
var LiveEarth = React.createClass({

	// GET THE INITIAL STATE
	getInitialState() {
		return({lat: '', long: '', astOne: '', astTwo: '', astThree: '', astFour: '', astFive: '', astSix: ''})
	},

	// WHERE IS THE SPACE STATION RIGHT NOW?
	componentDidMount() {

		// WHO ARE THE CURRENT ASTRONAUTS IN SPACE?
		var whothat = this;

		$.ajax({
			url: 'http://api.open-notify.org/astros.json',
			success: function(whodata) {
				// console.log(whodata)
				var sergey = whodata.people[0].name;
				var andrey = whodata.people[1].name;
				var shane = whodata.people[2].name;
				var oleg = whodata.people[3].name;
				var thomas = whodata.people[4].name;
				var peggy = whodata.people[5].name;

				whothat.setState({astOne: sergey, astTwo: andrey, astThree: shane, astFour: oleg, astFive: thomas, astSix: peggy})


			}
		})


		var that = this;

		$.ajax({
			url: 'http://api.open-notify.org/iss-now.json',
			success: function(stationdata) {

				// SET THE LATITUDE AND LONGITUDE OF THE SPACE STATION INTO VARIABLES
				var latitude = stationdata.iss_position.latitude;
				var longitude = stationdata.iss_position.longitude;

				// LOG IT JUST TO DOUBLE CHECK
				console.log(latitude, longitude)

				// SET THE STATE APPROPRIATELY
				that.setState({lat: latitude, long: longitude})
			}	

		})

		var mymap = L.map('mapid').setView([this.state.lat, this.state.long], 13);
		// new Map(options: Object)
		L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGFydGhqaGF2ZXJpIiwiYSI6ImNpeGNxNWN6azAwYXMyeWxmb2kzZHFuaHUifQ.IEhU6FLL_DdjRAQ1VD_PSA', {
		    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		    maxZoom: 30,
		    accessToken: 'pk.eyJ1IjoicGFydGhqaGF2ZXJpIiwiYSI6ImNpeGNxNWN6azAwYXMyeWxmb2kzZHFuaHUifQ.IEhU6FLL_DdjRAQ1VD_PSA'
		}).addTo(mymap);

		// map.addControl(new mapboxgl.GeolocateControl({
		//     positionOptions: {
		//         enableHighAccuracy: true
		//     }
		// }));

		// var nav = new mapboxgl.NavigationControl();
		// map.addControl(nav, 'top-left');

		// var map = new mapboxgl.Map({
		//     container: 'map', // container id
		//     style: 'mapbox://styles/mapbox/dark-v9', //hosted style id
		//     center: [this.state.lat, this.state.long], // starting position
		//     zoom: 3 // starting zoom
		// });

	 
	var track = (function moveISS () {
	    $.getJSON('http://api.open-notify.org/iss-now.json?', function(data) {
	        var lat = data['iss_position']['latitude'];
	        var lon = data['iss_position']['longitude'];

	        // See leaflet docs for setting up icons and map layers
	        // The update to the map is done here:
	        iss.setLatLng([lat, lon]);
	        isscirc.setLatLng([lat, lon]);
	        map.panTo([lat, lon], animate=true);
	    });
	    setTimeout(moveISS, 5000); 
	})

	console.log(track)

	},

	// THE RENDER FUNCTION
	render: function() {
		return (
			<div>

				<div className="liveheader">
					<center><p id="liveheadtext"><strong><span id="headerwrap">International Space Station</span></strong></p></center>
					<center><h1 id="liveheading">The Earth- Live from the International Space Station</h1></center>
					<center><h1><span className="glyphicon glyphicon-chevron-down" id="arrow"></span></h1></center>
				</div>
				
				{
					// WHERE IS THE INTERNATIONAL SPACE STATION RIGHT NOW?-----------------------------
				}

				<div className="info">
					<center><h1>Where is the Space Station right now?</h1></center>
					
					<center>
						<div className="row">

						  <div className="col-md-6">
						  		
						  		{
						  			// THIS IS WHERE THE MAP WILL BE
						  		}

						  		{
						  		 // <div id="mapid">
						  		 // 	{
						  		 // 		this.track
						  		 // 	}
						  		 // </div>
						  		}

						  		<div className="framewrapper">
						  			<iframe src="http://open-notify.org/Open-Notify-API/" className="trackframe"></iframe>
						  		</div>

						  </div>

						  <div className="col-md-6">
						  		
						  		<center>
						  			<table className="latlongtable">
						  				<tbody className="tablebody">

										  <tr className="tablerows">
										    <th className="tablehead">Latitude</th>
										    <th className="tablehead">Longitude</th> 
										  </tr>
										
										  <tr className="tablerows">
										    <td className="tabledata">{this.state.lat}</td>
										    <td className="tabledata">{this.state.long}</td> 
										  </tr>

									  </tbody>
									</table>
						  		</center>
						  		
						  		<br />

						  		<p className="sstext">
						  			The table above in conjuction with the Map
						  			are current trajectories of where the International Space Station is 
						  			above us in orbit.
						  		</p>
						  </div>

						</div>
					</center>



				</div>

				{
					// WHAT IS THE INTERNATIONAL SPACE STATION?---------------------------------------------
				}

				<div className="whosupthere">
					<center><h1><strong>Who's up there?</strong></h1></center>

					<center>
						<div className="row">

						  <div className="col-md-6" id="currentlyleft">
						  	<p id="currentlytext">
						  		Currently, there are a total of <span id="six"><strong>6</strong></span> Astronauts up in
						  		the International Space Station- from varying Space Agencies around the World.
						  	</p>
						  </div>
						  
						  <div className="col-md-6" id="currentlyright">
						  	<center>
						  		<ul className="astlist">
						  			<li><span className="astname">{this.state.astOne}</span></li>
						  			<li><span className="astname">{this.state.astTwo}</span></li>
						  			<li><span className="astname">{this.state.astThree}</span></li>
						  			<li><span className="astname">{this.state.astFour}</span></li>
						  			<li><span className="astname">{this.state.astFive}</span></li>
						  			<li><span className="astname">{this.state.astSix}</span></li>
						  		</ul>
						  	</center>
						  </div>

						</div>
					</center>

				</div>


				<center><img src="https://bdn-data.s3.amazonaws.com/blogs.dir/344/files/2015/10/iss.jpeg" className="img-responsive" role="presentation" /></center>

				<div className="whatisit">
					<div className="container">

					</div>
				</div>

			</div>
		)
	}
})

// EXPORT THE LIVE EARTH MODULE ----------------------------------------------------------------------------------------------
export default LiveEarth;