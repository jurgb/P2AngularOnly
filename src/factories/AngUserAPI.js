app.service('userService', ['$q', function($q) {
  var users = [{
      id:'1',
      name: 'Barbier',
      firstname: 'Jurgen',
      picUrl: './assets/images/profilepics/me.png'
  }, {
      id:'2',
      name: 'Barbier',
      firstname: 'Bruno',
      picUrl: './assets/images/profilepics/me.png'
  }, {
      id:'3',
      name: 'Van Haudt',
      firstname: 'Helga',
      picUrl: './assets/images/profilepics/me.png'
  }];

  // Promise-based API
  return {
      loadAll: function() {
          // Simulate async nature of real remote calls
          return $q.when(users);
      }
  };
}]);