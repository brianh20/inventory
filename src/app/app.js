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

	var viewElements = {
		name: 'viewElements',
		url: '/viewElements',
		templateUrl : '/app/pages/viewElements.html'
	}

	var editElement = {
		name: 'editElement',
		url: '/editElement',
		templateUrl : '/app/pages/editElement.html'
	}



	$stateProvider.state(home);
	$stateProvider.state(newSensor);
	$stateProvider.state(newElement);
	$stateProvider.state(viewSensors);
	$stateProvider.state(viewElements);
	$stateProvider.state(editElement);
	
});

app.directive('navbar', function(){
  return{
    templateUrl : '/app/widgets/navbar.html'
  };
});

app.controller('editElement', function($scope) {

	angular.element(document).ready(function () {
		var expected = {lat: -34.6160073, lng: -58.3890407};
		var truth = {lat: -34.617, lng: -58.3990407};

		var map = new google.maps.Map(document.getElementById('elementMap'), {
	  		zoom: 14,
	  		center: expected
		});
		
		var markerExpected = new google.maps.Marker({
	  		position: expected,
	  		map: map,
	  		icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
		});
		
		var markerTruth = new google.maps.Marker({
	  		position: truth,
	  		map: map,
	  		icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
		});
    });

});
























