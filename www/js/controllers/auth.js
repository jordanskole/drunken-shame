'use strict';

app.controller('AuthCtrl', function($scope, $state, Auth) {

  // listen for login to fix hard refresh
  $scope.$on('$firebaseSimpleLogin:login', function() {
    $state.go('tab.dash');
  });

  $scope.login = function() {
    if( $scope.action === 'Register') {
      Auth.register($scope.user).then(function(authUser) {
        console.log(authUser);
        $state.go('tab.dash');
      });
    } else {
      console.log('Logging in...');
      Auth.login($scope.user).then(function() {
        $state.go('tab.dash');
      });
    }

  };

  $scope.logout = function() {
    Auth.logout();
  };

  $scope.action = 'Login';

});
