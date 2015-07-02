

module.exports = function(app, model)
{
	var express = require('express');
	var todosRouter = express.Router();

	/* GET users listing. */
	todosRouter.get('/', function(req, res)
	{
		/*/ Sync
		var allTodos = model.allTodos();
		var model = { todos: allTodos };
	  	res.render('todos/list', model );
	  	// */

	  	// Async
		model.allTodos(function(err, allTodos)
		{
			if(err) return res.status(500).send("OMG! Server Error.");

			var model = { todos: allTodos };
	  		res.render('todos/list', model );
		});
	});

	todosRouter.post('/toggle/:id', function(req, res)
	{
		var id = req.params.id;
		model.getById(id, function(err, todo) {
            console.log("######" + err);
            
            
			if(err) {
                return res.status(404).send("TODO " + id + " not found.");
            }

			model.toggle(id, function(err) {
				if(err) {
                    return res.status(500).send("Server error");
                }
				//res.redirect('/todos#todo-' + id);
                res.redirect('/todos/');
			});

		});

	});


	todosRouter.get('/new', function(req, res)
	{
	  res.send('Create..');
	});

	todosRouter.post('/new', function(req, res)
	{
		var todo = new Todo(
            null,
            req.body.title,
            req.body.description
        );
		model.create(todo, function(err, todo) {


		});
	});


	todosRouter.get('/delete/:id', function(req, res)
	{
		var id = req.params.id;
	  	res.send('Delete ' + id + ' ?');
	});

	app.use("/todos", todosRouter);
}