

module.exports.Todo = function Todo(id, title, description, creationDate, done) {
	this.id = id || require('node-uuid').v4();
	this.title = title;
	this.description = description;
	this.creationDate = creationDate || new Date();
	this.done = done || false;
}

