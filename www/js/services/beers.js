// all beers
app.factory('Beer', ['$firebase', 'FIREBASE_URL', function($firebase, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL + 'beers');

  var beers = $firebase(ref);

  var Beer = {
    all: function() {
      return beers;
    },
    find: function(beerId) {
      return beers.$child(beerId);
    }
  };

  return Beer;
}]);
