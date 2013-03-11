requirejs.config({
	baseUrl: 'js',
	paths: {
		'angular': '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.1.1/angular.min',
		'jquery': '//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min',
		'bootstrap': '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.1/js/bootstrap.min',
		'underscore': '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min',
	},
	shim: {
		'underscore': {
			exports: '_',
		},
		'bootstrap': {
			deps: ['jquery'],
			exports: '$',
		},
		'angular': {
			deps: ['jquery'],
			exports: 'angular',
		},
	},
});

requirejs(['angular'], function(angular) {
	angular.bootstrap(document, []);
});

