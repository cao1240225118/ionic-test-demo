// Ionic Starter App

angular.module('starter', ['ionic'])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'views/home/home.html'
        })
        .state('reservation', {
          url: '/reservation',
          controller: 'ReservationController',
          templateUrl: 'views/reservation/reservation.html'
        })
        .state('weather', {
          url: '/weather',
          controller: 'WeatherController',
          templateUrl: 'views/weather/weather.html'
        })
        .state('restaurants', {
          url: '/restaurants',
          controller: 'RestaurantsController',
          templateUrl: 'views/restaurants/restaurants.html'
        })
        .state('tour', {
          url: '/tour',
          templateUrl: 'views/tour/tour.html'
        });


    $urlRouterProvider.otherwise('/tour');
})


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {

      StatusBar.styleDefault();
    }
  });
});