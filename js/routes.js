angular.module('NetflixRouter')
       .config(function($routeProvider){
               console.log($routeProvider)
              $routeProvider.when('/', {
                templateUrl: 'templates/pages/home/form-consulta.html'                
              })
              
              .otherwise({
                  templateUrl: 'templates/pages/home/form-consulta.html'
              })
        })