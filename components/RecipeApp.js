/** @jsx React.DOM */
var React = require('react');
var SearchForm = require('./SearchForm');
var RecipeList = require('./RecipeList');

var RecipeApp = React.createClass({
	render: function() {
		var recipes = this.props.recipes;

		return (
			<div className="recipe-app">
				<div className="container">
					<SearchForm />
					<RecipeList recipes={recipes} />
				</div>
			</div>
		);
	}
});

module.exports = RecipeApp;
