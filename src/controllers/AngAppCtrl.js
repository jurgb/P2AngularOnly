app.controller('AppCtrl', ['$scope', '$mdSidenav', 'muppetService', 'destService','APIservice', '$timeout','$log', function($scope, $mdSidenav,  muppetService, destService,APIservice, $timeout, $log) {
  var allMuppets = [];
  var allDests = [];
  var Categories = [];
  var Departures = [];
    $scope.loading = "true";
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
    
 $scope.activitycategories = [
        
    ];
    
    $scope.departurepoints = [
        
    ];
    
    $scope.destinations = [
        
    ];
    
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
    $scope.departures = function(){
      //Alle notifications binnehalen en in scope stoppen
		APIservice.departures()
			.success(function(data){
                
				$scope.departurepoints = data;
                
                console.log(data);
                
			})
            .error(function(){
                console.log("fail");
            
            });
    };
    $scope.destinations = function(){
      //Alle notifications binnehalen en in scope stoppen
        params = {'UxplrSearch[departurePoint]':'BRU','UxplrSearch[dateFrom]':'2015-07-07','UxplrSearch[dateTo]':'2015-07-14'};
		APIservice.destinations(params)
			.success(function(data){
                
				$scope.destinations = data;

                console.log(data);
            $scope.loading = false;
                
			})
            .error(function(){
                console.log("fail");
            
            });
    };

    $scope.carVacationFilter = function(dest)
    {
    // Do some tests

    if(dest.distance.miles < 1500)
    {
        return true; // this will be listed in the results
    }

    return false; // otherwise it won't be within the results
    };
    
    $scope.skiVacationFilter = function(dest)
    {
    // Do some tests

    if(dest.distance.miles > 0)
    {
        return true; // this will be listed in the results
    }

    return false; // otherwise it won't be within the results
    };
    
}])