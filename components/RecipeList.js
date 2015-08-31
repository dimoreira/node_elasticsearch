/** @jsx React.DOM */
var React = require('react');
var Recipe = require('./Recipe');

var RecipeList = React.createClass({
	render: function() {
		var recipes = this.props.recipes;

		if (!recipes) {
			return (
				<div className="recipe-list empty">
					<h2>No recipes</h2>
				</div>
			);
		} else {
			var list = recipes.map(function(r) {
				return (
					<Recipe data={r} />
				);
			});

			return (
				<div className="recipe-list">
					<h2>Recipes:</h2>
					{list}
				</div>
			);
		}
	}
});

var styles = {
	listTitle: {
		fontSize: 10
	}
};

module.exports = RecipeList;
