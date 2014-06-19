app.controller('BeersCtrl', function($scope, Beer) {
  $scope.beers = Beer.all();

});

app.controller('BeerDetailCtrl', function($scope, $stateParams, Beer) {

  var beer = Beer.find($stateParams.beerId);
  $scope.beer = beer;

  $scope.favorite = function() {
    Beer.favorite($stateParams.beerId);
  };

});
