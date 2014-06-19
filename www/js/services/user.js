'use strict';

app.factory('User', function($firebase, $rootScope, FIREBASE_URL, Auth) {

  var ref = new Firebase(FIREBASE_URL + 'users');

  var users = $firebase(ref);

   var User = {
     create: function(authUser, username) {
       users[username] = {
         md5_hash: authUser.md5_hash,
         username: username,
         admin: false,
         $priority: authUser.uid
       };

       users.$save(username).then(function(username) {
         setCurrentUser(username);
       });
     },

     findByUsername: function(username) {
       if(username) {
         return users.$child(username);
       }
     },

     getCurrent: function() {
       return $rootScope.currentUser;
     },

     signedIn: function() {
       return Auth.signedIn();
     }
   };

  function setCurrentUser(username) {
    $rootScope.currentUser = User.findByUsername(username);
  }

  $rootScope.$on('$firebaseSimpleLogin:login', function(e, authUser) {
    var query = $firebase(ref.startAt(authUser.uid).endAt(authUser.uid));

    query.$on('loaded', function() {
      setCurrentUser(query.$getIndex()[0]);
    });
  });

  return User;

});
