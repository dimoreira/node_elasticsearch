/** @jsx React.DOM */
var React = require('react');

var SearchForm = React.createClass({
	render: function() {
		return (
			<div className="search-form">
				<h2 style={styles.searchTitle}>Search Recipes</h2>
				<form className="form-inline">
					
					<div className="form-group">
						<input type="text" className="form-control" placeholder="Search for a recipe"/>
					</div>

					<button type="button" className="btn btn-primary">Search</button>
				</form>
			</div>
		);
	}
});

var styles = {
	searchTitle: {
		fontSize: 22
	}
};

module.exports = SearchForm;
