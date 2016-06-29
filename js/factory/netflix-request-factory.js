angular.module('NetflixRouter')
       .factory('testFactory', 
                function testFactory() {
                    return "teste";
                } 
       );

angular.module('NetflixRouter')
       .factory('apiRequest', function netflixRequestFctory($http, apiUrl, testFactory) {
           console.log(testFactory);
           return {
                getMovie: function(typeQuery, valueQuery) {
                     return $http.get(apiUrl+typeQuery+"="+valueQuery);                     
                }
            } 
       })