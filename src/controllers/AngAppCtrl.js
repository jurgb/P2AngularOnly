app.controller('AppCtrl', ['$scope', '$mdSidenav', 'muppetService', 'destService', '$timeout','$log', function($scope, $mdSidenav, muppetService, destService, $timeout, $log) {
  var allMuppets = [];
  var allDests = [];
    
  $scope.selected = null;
  $scope.muppets = allMuppets;
  $scope.dests = allDests;
  $scope.selectMuppet = selectMuppet;
  $scope.toggleSidenav = toggleSidenav;
  
  loadMuppets();
  loadDest();
  //*******************
  // Internal Methods
  //*******************
  function loadMuppets() {
    muppetService.loadAll()
      .then(function(muppets){
        allMuppets = muppets;
        $scope.muppets = [].concat(muppets);
        $scope.selected = $scope.muppets[0];
      })
  }
    
  function loadDest() {
    destService.loadAll()
      .then(function(data){
        allDests = data;
        $scope.dests = [].concat(data);
      })
  }
  function toggleSidenav(name) {
    $mdSidenav(name).toggle();
  }
  
  function selectMuppet(muppet) {
    $scope.selected = angular.isNumber(muppet) ? $scope.muppets[muppet] : muppet;
    $scope.toggleSidenav('left');
  }
}])