var apiUrl = "http://netflixroulette.net/api/api.php?";
angular.module('NetflixRouter')
       .controller('HomeIndexController', function($http) {
            this.preload = false;
            $http.get("#/index");
			
       });

angular.module('NetflixRouter')
       .controller('FormController', function($http, $routeParams) {
            this.type;
            this.name;
            this.info = [];
			var form = this;
            this.preload = false;
            
            this.getFlixJson = function () {       
			this.preload = true;
                
            $http.get(apiUrl+this.type+"="+this.name)
                    .success(function(result) {
                    form.info = [];
                    if(result.length > 1) {
                        for(r in result) {
                            form.info.push(result[r]);    
                        }    
                     } else {
                        form.info.push(result);    
                    }
                    console.log(result);
					
                    }).error(function(error){
                        console.log(error.message);
                    })
				
                this.preload = false;
            }
        });