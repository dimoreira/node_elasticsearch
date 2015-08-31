/** @jsx React.DOM */
var React = require('react');
var RecipeApp = require('./components/RecipeApp');

var recipes = JSON.parse(document.getElementById('data').value);

React.render(
	<RecipeApp recipes={recipes} />,
	document.getElementById('app')
);
