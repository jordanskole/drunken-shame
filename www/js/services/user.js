'use strict';

app.factory('User', function($firebase, FIREBASE_URL, Auth) {

  var ref = new Firebase(FIREBASE_URL + 'users');

  var users = $firebase(ref);

   var User = {
     create: function(authUser) {
       users[authUser.md5_hash] = {
         md5_hash: authUser.md5_hash,
         email: authUser.email,
         admin: false,
         $priority: authUser.uid
       }

       users.$save(authUser.md5_hash);
     }
   };

   return User;

});
