'use strict';

app.controller('AccountCtrl', function($scope, $state, Auth) {
  $scope.logout = function() {
    Auth.logout();
  };
});
