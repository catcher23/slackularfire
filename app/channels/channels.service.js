angular.module('angularfireSlackApp')
  .service('Channels', ['$firebaseArray', 'FirebaseUrl', function ($firebaseArray, FirebaseUrl) {
    var channelsRef = new Firebase(FirebaseUrl + 'channels');
    var channels = $firebaseArray(channelsRef);

    return channels;
  }]);
