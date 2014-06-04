app.controller('BeersCtrl', function($scope, Beers) {
  $scope.beers = Beers.get();
});
