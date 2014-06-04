app.controller('DashCtrl', function($scope) {
});

app.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
});

app.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
});

app.controller('AccountCtrl', function($scope) {
});
