angular.module('NetflixRouter')
       .controller('HomeIndexController', function($http) {
            $http.get("#/index");
       });

angular.module('NetflixRouter')
       .controller('FormController', function($http, $routeParams, apiUrl, apiRequest) {
            this.type;
            this.name;
            this.info = [];
			var form = this;
            this.preload = false;
            this.noResult = false;
            
            this.getFlixJson = function () {      
                form.preload = true;
                console.log(apiRequest.getMovie(this.type, this.name))
                apiRequest.getMovie(this.type, this.name).success(function(result) {
                    form.info = [];
                    form.noResult = false;
                    form.preload = false;
                    
                    if(result.length > 1) {
                        for(r in result) {
                            form.info.push(result[r]);    
                        }    
                     } else {
                        form.info.push(result);    
                     }
                    
                }).error(function(error) {
                    form.noResult = true;
                    form.preload = false;
                    console.log(error.message);                    
                });               
           }
        });		
		
angular.module('NetflixRouter')
       .controller('FilmeExibirController', function($http, $routeParams, apiUrl) {
	   this.preload = true;
       var controllerExibir = this;
					
        $http.get(apiUrl+'title=' + $routeParams.id)
            .success(function(result) {
            controllerExibir.filme = result;
            console.log(controllerExibir);


            }).error(function(error){

                console.log(error.message);
            })
            this.preload = false;            
        });		
