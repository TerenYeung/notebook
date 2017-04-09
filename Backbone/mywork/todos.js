$(function(){

// Todo Model

	let Todo = Backbone.Model.extend({

		defaults: function(){
			return {
				title:
			}
		}

	})
// Todo Collection

	let TodoList = Backbone.Collection.extend();

	let Todos = new TodoList;

// Todo View

	let Appview = Backbone.View.extend({

		el: $('#todo-app'),

		statsTemplate: _.template($('#stats-template').html()),

		events: {

			'keypress #new-todo': 'createOnEnter',
			'click #toggle-all': 'toggleAllComplete',
			'click #clear-completed': 'clearComplted'

		}

		initialize: function(){

			this.input = this.$('#new-todo');
			this.allCheckbox = this.$('#toggle-all')[0];
			this.main = $('#main');
			this.footer = this.$('footer');

			this.listenTo(Todos, 'add', this.addOne());
			this.listenTo(Todos, 'reset', this.addOne());
			this.listenTo(Todos, 'all', this.addOne());

		}
	})

	let App = new AppView;

})