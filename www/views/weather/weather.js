angular.module("starter")
.controller("WeatherController",function($scope,$http, $ionicLoading, $ionicHistory){
     var directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    $ionicLoading.show();
    $http.get("https://ionic-in-action-api.herokuapp.com/weather").success(function(weather){
        $scope.weather  = weather;
        $ionicLoading.hide();
    }).error(function(err){
       $ionicLoading.show({
           template:"未能加载天气信息，请再次刷新",
           duration:3000,
       });
//        $ionicHistory.goBack();
    });

    $scope.getDirection =  function(degree){
        if( degree > 338 ){
            degree = 360 - degree ;
        }
        var index = Math.floor((degree+22) / 45);
        return directions[index];
    };
})
