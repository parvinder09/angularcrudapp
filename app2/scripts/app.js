angular.module('movieApp', ['ui.router', 'ngResource','ngRoute', 'movieApp.controllers', 'movieApp.services']);

angular.module('movieApp').config(function($stateProvider) {
  $stateProvider.state('movies', { // state for showing all movies
    url: '/movies',
    templateUrl: 'views/movies.html',
    controller: 'MovieListController'
  })
  /*.state('viewMovie', { //state for showing single movie
    url: '/movies/:id/view',
    templateUrl: 'views/movie-view.html',
    controller: 'MovieViewController'
  }).state('newMovie', { //state for adding a new movie
    url: '/movies/new',
    templateUrl: 'views/movie-add.html',
    controller: 'MovieCreateController'
  }).state('editMovie', { //state for updating a movie
    url: '/movies/:id/edit',
    templateUrl: 'views/movie-edit.html',
    controller: 'MovieEditController'
  })*/;
}).run(function($state) {
  $state.go('movies'); //make a transition to movies state when app starts
});