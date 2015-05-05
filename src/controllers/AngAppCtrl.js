app.controller('AppCtrl', ['$scope', '$mdSidenav', 'muppetService', 'APIservice', '$timeout','$log', '$mdDialog', function($scope, $mdSidenav,  muppetService, APIservice, $timeout, $log, $mdDialog) {
  var allMuppets = [];

  var Categories = [];
  var Departures = [];
    $scope.loading = "true";
    $scope.activitycategories = [
        
    ];
    
  $scope.selected = null;
  $scope.muppets = allMuppets;

  $scope.selectMuppet = selectMuppet;
  $scope.toggleSidenav = toggleSidenav;
  
  loadMuppets();

  //*******************
  // Internal Methods
  //*******************
    $scope.showAdvanced = function(data) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: './views/dialog/dialog.html',
        locals: {
           item: data
         }
    })
    .then(function(answer) {
       window.location = "#/profile";
    });
  };
function DialogController($scope, $mdDialog, item) {
    $scope.item = item;
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}
  function loadMuppets() {
    muppetService.loadAll()
      .then(function(muppets){
        allMuppets = muppets;
        $scope.muppets = [].concat(muppets);
        $scope.selected = $scope.muppets[0];
      })
  }

  function toggleSidenav(name) {
    $mdSidenav(name).toggle();
  }
  
  function selectMuppet(muppet) {
    $scope.selected = angular.isNumber(muppet) ? $scope.muppets[muppet] : muppet;
    $scope.toggleSidenav('left');
    $scope.destinations= [];
    $scope.loading = "true";
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
        params = {'UxplrSearch[departurePoint]':'BRU','UxplrSearch[dateFrom]':'2015-07-07','UxplrSearch[dateTo]':'2015-07-14', 'UxplrSearch[requiredActivities]':'','UxplrSearch[optionalActivities]':'1, 134, 21'};
		APIservice.destinations(params)
			.success(function(data){
                
				$scope.destinations = data;

                console.log(data);
            $scope.loading = false;
                
			})
            .error(function(){
                console.log("fail");
                alert("Error: the connection to the databank seems to be interupted!");
            });
    };
    
    $scope.skidestinations = function(){
      //Alle notifications binnehalen en in scope stoppen
        params = {'UxplrSearch[departurePoint]':'BRU','UxplrSearch[dateFrom]':'2015-07-07','UxplrSearch[dateTo]':'2015-07-14','UxplrSearch[temperature]':'{"0":{"min":"cold","max":"cool"}}','UxplrSearch[requiredActivities]':'112'};
		APIservice.destinations(params)
			.success(function(data){
                
				$scope.destinations = data;

                console.log(data);
                $scope.loading = false;
                
			})
            .error(function(){
                console.log("fail");
                $scope.loading = false;
                alert("Error: the connection to the databank seems to be interupted!");
            });
    };
    $scope.sundestinations = function(){
      //Alle notifications binnehalen en in scope stoppen
        params = {'UxplrSearch[departurePoint]':'BRU','UxplrSearch[dateFrom]':'2015-07-07','UxplrSearch[dateTo]':'2015-07-14','UxplrSearch[temperature]':'{"0":{"min":"warm","max":"hot"}}'};
		APIservice.destinations(params)
			.success(function(data){
                
				$scope.destinations = data;

                console.log(data);
                $scope.loading = false;
                
			})
            .error(function(){
                console.log("fail");
                alert("Error: the connection to the databank seems to be interupted!");
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