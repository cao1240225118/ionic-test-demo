// Ionic Starter App

angular.module('starter', ['ionic'])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('tabs',{
            url:"/tabs",
            abstract:true,
            templateUrl:"temp/tabs.html"
        })
        .state('tabs.rates',{
            url:"/rates",
            views:{
                'rates-tab':{
                    controller:'ratesController',
                    templateUrl:'temp/rates/rates.html'
                }
            }
        })
        .state('tabs.history',{
            url:"/history",
            views:{
                'rates-tab':{
                    controller:'historyController',
                    templateUrl:'temp/history/history.html'
                }
            }
        })
        .state('tabs.currencies',{
            url:"/currencies",
            views:{
                'rates-tab':{
                    controller:'currenciesController',
                    templateUrl:'temp/currencies/currencies.html'
                }
            }
        })
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


    $urlRouterProvider.otherwise('/tabs/rates');
})
.factory("Currencies", function(){
    return [
        { code: 'BTC', text: 'Australian Dollar', selected: true },
        { code: 'ETH', text: 'Brazilian Real', selected: false },
        { code: 'LTC', text: 'Canadian Dollar', selected: true },
        { code: 'DOGE', text: 'Chinese Yuan', selected: true},
        { code: 'YBC', text: 'Euro', selected: true },
    ];
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
