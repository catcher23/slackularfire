angular.module('angularfireSlackApp')
  .controller('ProfileCtrl', ['$state', 'md5', 'auth', 'profile',
    function($state, md5, auth, profile) {
    var self = this;

      self.profile = profile;

      self.updateProfile = function () {
        self.profile.emailHash = md5.createHash(auth.password.email);
        self.profile.$save().then(function() {
          $state.go('channels');
        });
      }
  }]);
