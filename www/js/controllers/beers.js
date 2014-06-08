app.controller('BeersCtrl', function($scope, Beer) {
  $scope.beers = Beer.all();
});

app.controller('BeerDetailCtrl', function($scope, $stateParams, Beer) {
  $scope.beer = Beer.find($stateParams.beerId);
});
