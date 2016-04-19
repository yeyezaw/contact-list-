//AngularJs module
var app = angular.module('myApp',[]);

app.controller('AppCtrl',['$scope','$http', function($scope,$http){
      console.log('Hello World from controller');

      $http.get('/contactlist').success(function(response){
        console.log('got data requested');
        //Remember {{contact as contactlist}}
        $scope.contactlist = response;
      });


}]);
