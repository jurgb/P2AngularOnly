app.controller("AngAPIController", function($scope, APIservice, $mdSidenav, muppetService, $routeParams){
           
    //scope is wat de view allemaal kent
     $scope.user = {
        email: 'Jurgenbarbier@gmail.com',
        firstName: 'Jurgen',
        lastName: 'Barbier' ,
        address: 'Heidestraat 88' ,
        city: 'Schelle' ,
        biography: 'I created this app',
        postalCode : '2627',
        hotelmin: "1",
        hotelmax: "5",
        departurepoint:"BRU",
        food:"7",
        Travel:{
            airtravel:true,
            cartravel:true,
            traintravel:false,
        }
    };
    $scope.activitycategories = [
        
    ];
    
    $scope.departurepoints = [
        
    ];
    
    $scope.destinations = [
        
    ];
    $scope.selectUsertab = selectUsertab;
    $scope.selected = null;
    $scope.usertabs = [{
      id:'1',
      name: 'Basic Info',
      iconurl: './assets/images/icons/basicinfo.svg'
  }, {
      id:'2',
      name: 'Travel info',
      iconurl: './assets/images/icons/transport.svg'
  }, {
      id:'3',
      name: 'entertainement',
      iconurl: './assets/images/icons/activities.svg'
  }];
    $scope.selected = $scope.usertabs[0];
    
    function selectUsertab(muppet) {
    $scope.selected = angular.isNumber(muppet) ? $scope.usertabs[muppet] : muppet;
    $scope.toggleSidenav('left');
  }
    
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