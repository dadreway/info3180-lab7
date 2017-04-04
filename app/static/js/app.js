// Your JavaScript Code here
/* global angular */

var app = angular.module('thumbs',[]);

app.controller( 'myController', function($scope, $http){
	$http.get('/api/thumbnails').then(function(response){
	$scope.images = response.data["Thumbnails"];
	});
});