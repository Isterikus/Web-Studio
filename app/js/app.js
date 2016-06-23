var app = angular.module('todoApp', ['ui.router']);

app.config( function($stateProvider){
	$stateProvider
	.state("main", {
		url: "/",
		templateUrl: "views/main.html"
	})

	.state("todo", {
		url: "/todo",
		controller: "todoCtrl",
		templateUrl: "views/todo.html"
	})
} )