app.factory('Beers', ['$resource', function($resource) {
  return $resource('https://mi-beer-guide.firebaseio.com/beers.json');
}]);
