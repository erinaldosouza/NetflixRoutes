angular.module('NetflixRouter')
       .controller('HomeIndexController', function($http) {
            this.preload = false;
            $http.get("#/index");
			

			
        });


   /*this.togglePreload = function() {
            return (this.preload = (!this.preload));
        
        
        this.showForm() {
            
        }*/
		
//var app = angular.module("NetflixRouter", ["ngResource"]);

function MyCtrl($scope, $resource) {
			  var TwitterAPI = $resource("http://search.twitter.com/search.json",
    { callback: "JSON_CALLBACK" },
    { get: { method: "JSONP" }});

  $scope.search = function() {
    $scope.searchResult = TwitterAPI.get({ q: $scope.searchTerm });
  };
}