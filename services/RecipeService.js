var elastic = require('elasticsearch');
var q = require('q');

var client = new elastic.Client({
	host: "localhost:9200"
});

var RecipeService = {};

RecipeService.search = function(term, offset) {
	var deffered = q.defer();
	var query = {
		match: {
			_all: term
		}
	};

	client.search({
		index: 'recipes',
		type: 'recipe',
		body: {
			size: 10,
			from: (offset || 0) * 10,
			query: query
		}
	}).then(function(result) {
		var ii = 0, hits_in, hits_out = [];

		hits_in = (result.hits || {}).hits || [];

		for (; ii < hits_in.length; ii++) {
			hits_out.push(hits_in[ii]._source);
		}

		deffered.resolve(hits_out);
	}, deferred.reject);
};

module.exports = RecipeService;
