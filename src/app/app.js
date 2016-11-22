var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider){
	//$urlRouteProvider.otherwise("/");

	var home = {
		name: 'home',
		url: '',
		templateUrl : '/app/pages/home.html'
	}

	var newSensor = {
		name: 'newSensor',
		url: '/newSensor',
		templateUrl : '/app/pages/newSensor.html'
	}

	var newElement = {
		name: 'newElement',
		url: '/newElement',
		templateUrl : '/app/pages/newElement.html'
	}

	var viewSensors = {
		name: 'viewSensors',
		url: '/viewSensors',
		templateUrl : '/app/pages/viewSensors.html'
	}


	$stateProvider.state(home);
	$stateProvider.state(newSensor);
	$stateProvider.state(newElement);
	$stateProvider.state(viewSensors);
	
});

app.directive('navbar', function(){
  return{
    templateUrl : '/app/widgets/navbar.html'
  };
});
























