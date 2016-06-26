angular.module('NetflixRouter')
       .config(function($routeProvider){
              $routeProvider.when('/', {
                templateUrl: 'templates/pages/home/index.html'                
              })
              
              .when('/formconsulta',{
                  templateUrl: 'templates/pages/consulta/form-consulta.html',
                  controller: 'FormController',
                  controllerAs: 'form'
              })
			  
			 .when('/detalhes/:id',{
                  templateUrl: 'templates/pages/consulta/filme/exibir.html',
                  controller: 'FilmeExibirController',
                  controllerAs: 'exibir'
              })
              
              .otherwise({
                  templateUrl: 'templates/pages/home/index.html'
              })
        })