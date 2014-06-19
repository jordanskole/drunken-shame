// all beers
app.factory('Beer', ['$firebase', 'FIREBASE_URL', 'User', function($firebase, FIREBASE_URL, User) {
  var ref = new Firebase(FIREBASE_URL + 'beers');

  var beers = $firebase(ref);

  var Beer = {
    all: function() {
      return beers;
    },
    find: function(beerId) {
      return beers.$child(beerId);
    },
    favorite: function(beerId) {
      if (User.signedIn()) {
        var user = User.getCurrent();

        user.$child('favorites').$child(beerId).$set(beerId);
        console.log(user.username + " just added " + beerId + " to their faves.");
      }
    },
    wishlist: function(beerId) {

    }
  };

  return Beer;
}]);
