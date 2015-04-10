app.service('muppetService', ['$q', function($q) {
  var muppets = [{
      id:'1',
      name: 'Car',
      iconurl: './assets/images/icons/car.svg'
  }, {
      id:'4',
      name: 'Ski',
      iconurl: './assets/images/icons/ski.svg'
  }, {
      id:'3',
      name: 'Sun',
      iconurl: './assets/images/icons/sun.svg'
  }, {
      id:'2',
      name: 'Fly',
      iconurl: './assets/images/icons/plane.svg'
  }, {
      id:'5',
      name: 'cruise',
      iconurl: './assets/images/icons/sun.svg'
  }, {
      id:'6',
      name: 'Citytrips',
      iconurl: './assets/images/icons/sun.svg'
  }];

  // Promise-based API
  return {
      loadAll: function() {
          // Simulate async nature of real remote calls
          return $q.when(muppets);
      }
  };
}]);