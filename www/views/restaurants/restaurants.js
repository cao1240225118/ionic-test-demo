angular.module("starter")
.controller("RestaurantsController",function($scope,$http,$ionicLoading){
    $ionicLoading.show();
    $scope.page = 0;
    $scope.total = 1;
    $scope.restaurants = [];

    $scope.getData = function(){
        $scope.page++;
        $http.get("http://ionic-in-action-api.herokuapp.com/restaurants?age="+$scope.page).success(function(response){
            angular.forEach(response.restaurants,function(res){
               $scope.restaurants.push(res);
            });

            $scope.total = response.totalPages;
            $scope.$broadcast("scroll.infiniteScrollComplete");
            $ionicLoading.hide();
        }).error(function(err){
            $scope.$broadcast("scroll.infiniteScrollComplete");
            console.log(err);
        });
    };
    $scope.getData(); //第一次载入，先载入一次。
})
