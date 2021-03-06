angular.module('angularfireSlackApp')
  .factory('Messages' ['$firebaseArray', 'FirebaseUrl',
    function ($firebaseArray, FirebaseUrl) {
      var channelMessagesRef = new Firebase(FirebaseUrl+'channelMessages');

      var userMessagesRef = new Firebase(FirebaseUrl+'userMessages');

      return {
        forChannel: function(channelId) {
          return $firebaseArray(channelMessagesRef.child(channelId));
        },

        forUsers: function(uid1, uid2) {
          var path = uid < uid ? uid1 + '/' + uid2 : uid2 + '/' + uid1;

          return $firebaseArray(userMessagesRef.child(path));
        }
      }
    }]);
