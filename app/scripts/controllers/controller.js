'use strict';

/**
 * @ngdoc function
 * @name moviesappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moviesappApp
 */
angular.module('moviesappApp')
  .controller('AllmoviesController',['$scope','$window','$stateParams','Movies', function ($scope,$window,$stateParams,Movies) {
    /*$scope.movies=[
	{moviename:'movie1'},
	{moviename:'movie2'}
	];*/
	$scope.movies=Movies.query(function(result){
    console.log(result);
	$scope.movies = result;
	
    console.log('Total movies received', result.length);
	}, function(result){
    console.log('Error while fetching users list');
	
	});
	
	$scope.deleteMovie=function(movie){
	
		movie.$delete(function(){
			$window.location.href='';
		});
		
	};
	
	$scope.movie=Movies.get({id:$stateParams.id});
	//$scope.movies={title:'MK'};
	/*Movies.getMovies().query(function(response){
		$scope.movies=response;
	});
	*/
	
	
  }])
  .controller('AddNewMovieController',['$scope','$stateParams','$state','Movies',function($scope,$stateParams,$state,Movies){
  
		$scope.movie= new Movies();
		
		$scope.addMovie=function(){
			$scope.movie.$save(function(){
			$state.go('app');
			});
		};
  
  }])
  .controller('EditMovieController',['$scope','$stateParams','$state','Movies',function($scope,$stateParams,$state,Movies){
	
		$scope.EditMovie=function(){
			$scope.movie.$update(function(){
				$state.go('app');
				});
		};
		$scope.loadMovie=function(){
			$scope.movie=Movies.get({id:$stateParams.id});
		}
		$scope.loadMovie();
  }]);
