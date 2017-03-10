var app = angular.module('do', []);
app.controller('doController', function ($scope) {
  
  $scope.emptyToDo = function () {
    return {
      id: null
      , concluded: false
      , date: ""
      , header: ""
    }
    
  }
  $scope.deleteTask = function () {
    $scope.tasks.splice(this.$index, 1);
  };
  
  $scope.tasks = [];
  $scope.taskAdd = $scope.emptyToDo();
  
  $scope.add = function () {
    $scope.taskAdd.id = cuid();
    $scope.tasks.push($scope.taskAdd);
    $scope.taskAdd = $scope.emptyToDo();
  };
  
});