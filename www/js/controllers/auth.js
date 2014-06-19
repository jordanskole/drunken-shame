'use strict';

app.controller('AuthCtrl', function($scope, $state, Auth, User) {

  // listen for login to fix hard refresh
  $scope.$on('$firebaseSimpleLogin:login', function() {
    $state.go('tab.dash');
  });

  $scope.login = function() {
    if( $scope.action === 'Register') {
      Auth.register($scope.user).then(function(authUser) {
        User.create(authUser, $scope.user.username);
        Auth.login($scope.user);
        $state.go('tab.beers');
      });
    } else {
      Auth.login($scope.user).then(function() {
        $state.go('tab.beers');
      });
    }
  };

  $scope.logout = function() {
    Auth.logout();
  };

  $scope.action = 'Login';

});
