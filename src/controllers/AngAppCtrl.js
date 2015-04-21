app.controller('AppCtrl', ['$scope', '$mdSidenav', 'muppetService', 'destService','APIservice', '$timeout','$log', function($scope, $mdSidenav,  muppetService, destService,APIservice, $timeout, $log) {
  var allMuppets = [];
  var allDests = [];
  var Categories = [];
  var Departures = [];
    $scope.activitycategories = [
        
    ];
    
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
    
    $scope.activitycat = function(){
      //Alle notifications binnehalen en in scope stoppen
		APIservice.activitycat()
			.success(function(data){
                
				$scope.activitycategories = data;

                console.log(data);
                
			})
            .error(function(){
                console.log("fail");
            
            });
    };
}])