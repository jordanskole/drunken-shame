app.controller('BeersCtrl', function($scope, Beer) {
  $scope.beers = Beer.all();

  $scope.favorite = function() {
    if(!signedIn()) {
      $state.go('tab.login');
    }
  };
});

app.controller('BeerDetailCtrl', function($scope, $stateParams, Beer) {
  $scope.beer = Beer.find($stateParams.beerId);
});
