angular.module('angularfireSlackApp')
  .controller('AuthCtrl', ['$state', 'Auth', function ($state, Auth) {
    var self = this;

    self.user = {
      email: '',
      password: ''
    };

    self.login = function () {
      Auth.$authWithPassword(self.user)
        .then(function (auth) {
          $state.go('home');
        }, function (error) {
          self.error = error;
        });
    };

    self.register = function () {
      Auth.$createUser(self.user)
        .then(function (user) {
          self.login();
        }, function (error) {
          self.error = error;
        });
    }
  }]);
