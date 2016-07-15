angular.module('moviesappApp')
	.factory('Movies',['$resource', function ($resource) {
		console.log("service");
	return $resource('http://localhost:3000/movies/:id',{id:'@id'}, {
    update: {
      method: 'PUT'
    }
  });
  //http://movieapp-sitepointdemos.rhcloud.com/api/movies/   
  /*var movies={};
  movies.getMovies= function () {
			return $resource('http://movieapp-sitepointdemos.rhcloud.com/api/movies/', {}, {'query': {method: 'GET'}});
		};
	return movies;*/
	}]);
