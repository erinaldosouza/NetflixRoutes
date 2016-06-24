angular.module('NetflixRouter')
       .controller('HomeIndexController', function($http) {
            this.preload = false;
            $http.get("#/form-consulta");       
        });


   /*this.togglePreload = function() {
            return (this.preload = (!this.preload));
        
        
        this.showForm() {
            
        }*/