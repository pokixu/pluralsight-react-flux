"use strict";

var React = require('react');

var About = React.createClass({
	render: function() {
		return (
			<div>
				<h1> About </h1>
				<p> 
					This application uses the following technologies:
					<ul>
						<li> React </li>
						<li> Obviously </li>
						<li> etc. </li>
					</ul>
				</p>
			</div>
		);
	}
});

module.exports = About;