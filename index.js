
function init_marionette () {
	var Mn = Backbone.Marionette;
	var Bb = Backbone;

	var RootView = Mn.View.extend({
		template:'#template'
	});

	var App = Mn.Application.extend({
	  region: '#slide',

	  onStart : function(app,options) {
	    this.showView(new RootView(options));
	  }
	});

	var myApp = new App();
	var tmp_model = new Bb.Model(data)
	myApp.start({model: tmp_model });
}

init_marionette();