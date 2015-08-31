/** @jsx React.DOM */
var React = require('react');

var Recipe = React.createClass({
	render: function() {
		var rec = this.props.data;

		return (
			<div className="recipe">
				<h2>
					<a href="#">{rec.name}</a>
				</h2>
			</div>
		);
	}
});

var styles = {
};

module.exports = Recipe;
