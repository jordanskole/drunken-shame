'use strict';

app.controller('AuthCtrl', function($scope, $state, Auth) {

  if (Auth.signedIn()) {
    console.log('move');
    $state.go('tab.dash');
  }

  $scope.register = function() {

    Auth.register($scope.user).then(function(authUser) {
      console.log(authUser);
      $state.go('tab.dash');
    });

  };

  $scope.login = function() {

  };

});
