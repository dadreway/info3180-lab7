// Your JavaScript Code here
/* global angular */

var app = angular.module('thumbs',[]);

app.controller( 'thumbnailcontroller', function($scope, $http){
	$http.get('/api/thumbnails').then(function(response){
	$scope.images = response.data["thumbnails"];
	});
});