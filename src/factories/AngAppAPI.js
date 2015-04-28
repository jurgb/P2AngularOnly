app.service('muppetService', ['$q', function($q) {
  var muppets = [{
      id:'1',
      name: 'Car vacations',
      iconurl: './assets/images/icons/car.svg',
      filter: 'carVacationFilter',
      apicall: 'cardestinations'
  }, {
      id:'2',
      name: 'Ski vacations',
      iconurl: './assets/images/icons/ski.svg',
      filter: 'skiVacationFilter',
      apicall: 'destinations'
  }, {
      id:'3',
      name: 'Sun vacations',
      iconurl: './assets/images/icons/sun.svg',
      filter: 'carVacationFilter',
      apicall: 'cardestinations'
  }, {
      id:'4',
      name: 'Fly vacations',
      iconurl: './assets/images/icons/plane.svg',
      filter: 'carVacationFilter',
      apicall: 'cardestinations'
  }];

  // Promise-based API
  return {
      loadAll: function() {
          // Simulate async nature of real remote calls
          return $q.when(muppets);
      }
  };
}]);