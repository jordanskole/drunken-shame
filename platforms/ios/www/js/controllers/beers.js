app.controller('BeersCtrl', function($scope) {
  $scope.beers = [
    { id: 0, name: "Dirty Blonde Ale", type:"Blonde" },
    { id: 1, name: "Grand Circus IPA", type:"IPA" },
    { id: 2, name: "Conniption Fit", type:"Double IPA" }
  ];
});
