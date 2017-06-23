angular.module("starter")
.controller("ratesController",function($scope, $http, Currencies){
    var arr = ['btc','eth','ltc','doge','ybc'];
    $scope.obj = [];
    $scope.currencies = Currencies;
    $scope.load = function(){
        for(var i=0; i<arr.length; i++){
            $http.get('api/ticker?coin='+arr[i]).success(function(data){
                $scope.obj.push(data);
                if(i==arr.length){
                     angular.forEach($scope.currencies, function(currentData, index){
                        currentData.ticker = $scope.obj[index];
                    });
                }
            });
        };
    }
    $scope.load();
})
