var React = require('react');
require('node-jsx').install();
var RecipeApp = require('./components/RecipeApp');
var RecipeService = require('./services/RecipeService');

var Routes = {};

Routes.index = function(req, res) {

	RecipeService.search('bread', 1).then(function(results) {
		console.log(results);
		var markup = React.renderToString(
			React.createFactory('RecipeApp')({
				recipes: results
			})
		);
		res.render('index', {
			title: 'OpenRecipes - Home',
			markup: markup,
			data: JSON.stringify(recipes)
		});
	});
};

module.exports = Routes;
