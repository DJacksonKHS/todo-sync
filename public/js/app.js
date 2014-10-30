/*global Ember, EmberPouch, PouchDB, Todos:true */
window.Todos = Ember.Application.create({});

/*
Todos.ApplicationAdapter = EmberPouch.Adapter.extend({
	db: new PouchDB('todo')
});
*/

Todos.ApplicationAdapter = EmberPouch.Adapter.extend({
	db: new PouchDB('http://localhost:3000/db/todo')
});
