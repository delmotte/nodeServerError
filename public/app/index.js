(function(angular){
  'use strict';

  var app = angular.module('app', []);

  app.controller("ctrl", function($scope){
      $scope.message = "hello";
  });

})(angular);
