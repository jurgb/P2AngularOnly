app.controller("AngAPIController", function($scope, APIservice, $mdSidenav, muppetService, $routeParams){
           
    //scope is wat de view allemaal kent
    
    $scope.activitycategories = [
        
    ];
    
    $scope.departurepoints = [
        
    ];
    
    $scope.destinations = [
        
    ];
    
    $scope.toggleSidenav = toggleSidenav;
    function toggleSidenav(name) {
        $mdSidenav(name).toggle();
    }
    $scope.selecteddest = function($id){
      //Alle notifications binnehalen en in scope stoppen
        $scope.destID = $routeParams.destID;
    };
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
		APIservice.destinations()
			.success(function(data){
                
				$scope.destinations = data;

                console.log(data);
                
			})
            .error(function(){
                console.log("fail");
            
            });
    };
});