var fs = require('fs');
var elastic = require('elasticsearch');
var client = new elastic.Client({
	host: "localhost:9200"
});

fs.readFile('openrecipes.json', { encoding: 'utf-8' }, function(err, data) {
	if (err) throw err;

	var id = 0;
	var bulk_request = data.split('\n').reduce(function(bulk_request, line) {
		var obj, recipe;

		try {
			obj = JSON.parse(line);
		} catch(e) {
			console.log('Done reading');
			return bulk_request;
		}

		recipe = {
			id: id+1,
			name: obj.name,
			url: obj.url,
			recipeYield: obj.recipeYield,
			ingredients: obj.ingredients.split('\n'),
			prepTime: obj.prepTime,
			cookTime: obj.cookTime,
			datePublished: obj.datePublished,
			description: obj.description
		};
		console.log(recipe);

		bulk_request.push({
			index: {
				_index: 'recipes',
				_type: 'recipe',
				_id: recipe.id
			}
		});
		bulk_request.push(recipe);
		return bulk_request;
	}, []);

	var busy = false;
	var callback = function(err, resp) {
		if (err) console.log(err);
		busy = false;
	};

	var perhaps_insert = function() {
		if (!busy) {
			busy = true;
			client.bulk({
				body: bulk_request.slice(0, 1000)
			}, callback);
			bulk_request = bulk_request.slice(1000);
			console.log(bulk_request.length);
		}

		if (bulk_request.length > 0) {
			setTimeout(perhaps_insert, 10);
		} else {
			console.log('Inserted all records.');
		}
	};

	perhaps_insert();
});
