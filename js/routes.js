angular.module('NetflixRouter')
       .config(function($routeProvider){
               console.log($routeProvider)
              $routeProvider.when('/', {
                templateUrl: 'templates/pages/home/index.html'                
              })
              
              .when('/formconsulta',{
                  templateUrl: 'templates/pages/form-consulta.html'
              })
              
              .otherwise({
                  templateUrl: 'templates/pages/home/index.html'
              })
        })