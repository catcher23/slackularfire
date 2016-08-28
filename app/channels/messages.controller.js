angular.module('angularfireSlackApp')
  .controller('MessagesCtrl', ['profile', 'channelName', 'messages',
    function () {
      var self = this;
      self.messages = messages;
      self.channelName = channelName;
      self.message = '';

      self.sendMessage = function () {
        if(self.message.length > 0) {
          self.messages.$add({
            uid: profile.$id,
            body: self.message,
            timestamp: Firebase.ServerValue.TIMESTAMP
          }).then(function () {
            self.message = '';
          })
        }
      }
    }]);
