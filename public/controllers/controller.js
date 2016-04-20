//AngularJs module
var app = angular.module('myApp',[]);

app.controller('AppCtrl',['$scope','$http', function($scope,$http){
      console.log('Hello World from controller');

      var refresh = function(){
          $http.get('/contactlist').success(function(response){
            console.log('got data requested');
            //Remember {{contact as contactlist}}
            $scope.contactlist = response;
            $scope.contact = "";
          });
      };
      refresh();

      $scope.addContact = function(){
        console.log('$scope.contact');
        $http.post('/contactlist', $scope.contact).success(function(response){
            console.log(response);
            refresh();
        });
      };


}]);
