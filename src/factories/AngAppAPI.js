app.service('muppetService', ['$q', function($q) {
  var muppets = [{
      id:'1',
      name: 'Car vacations',
      iconurl: './assets/images/icons/car.svg'
  }, {
      id:'4',
      name: 'Ski vacations',
      iconurl: './assets/images/icons/ski.svg'
  }, {
      id:'3',
      name: 'Sun vacations',
      iconurl: './assets/images/icons/sun.svg'
  }, {
      id:'2',
      name: 'Fly vacations',
      iconurl: './assets/images/icons/plane.svg'
  }, {
      id:'5',
      name: 'cruise vacations',
      iconurl: './assets/images/icons/cruise.svg'
  }, {
      id:'6',
      name: 'Citytrips',
      iconurl: './assets/images/icons/city.svg'
  }];

  // Promise-based API
  return {
      loadAll: function() {
          // Simulate async nature of real remote calls
          return $q.when(muppets);
      }
  };
}]);