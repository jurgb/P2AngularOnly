app.controller("AngAPIController", function($scope, APIservice, $mdSidenav, muppetService, $routeParams){
    $scope.loading = "true";
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
        departurepoint:{
            label: 'Brussels (BRU)',
            value: 'BRU'
        },
        food:"7",
        travel:{
            airtravel:true,
            cartravel:true,
            traintravel:false,
            boattravel:true
        },
        selectedData:{
            Attractions:{
                'Religious Sites': false,
                'Science Musueams':false,
                'Ships':true,
                'Specialty Museums':false,
                'Piers/Boardwalks':true,
                'Wineries':false,
                'Zoos':false,
                'Bridges':false,
                'Ancient Ruins':false,
                'Castles': true,
                'Cemeteries': false,
                "Children's Museums": false,
                'Churches/Cathedrals':true,
                'Aquariums': true,
                'Architectural Buildings': true,
                'Historic Sites':false,
                'Historic Museums':false,
                'Landmarks': true,
                'Art Gallaries': false,
                'Military Museums':false,
                'Monuments/Statues': true,
                'Art Museums': false,
                'Museums': false,
                'Natural History': false,
                'Neighborhoods': true,
                'Observation Decks': true,
                'Planetariums': true
            },
            Entertainment:{
                'Theme Parks':true,
                'Bar/Clubs':true,
                'Shops':true,
                'Specialty Shops':false,
                'Sports Camps':true,
                'Sport Complexes':true,
                'Theaters':false,
                'Tours':true,
                'Water Parks':true,
                'Casinos':false,
                'Concerts':false,
                'Dinner Theaters':false,
                'Educational Sites':false,
                'Factory Tours':false,
                'Entertainment Centers':true,
                'Golf Courses':false,
                'Health Clubs':true,
                'Arenas/Stadiums':false,
                'Liberaries':false,
                'Malls':true,
                'Movie Theaters':true,
                'Operas':false,
                'Performances':false,
                'Playgrounds':false,
            },
            Outdoors:{
                'Reefs':true,
                'Scenic Dives':true,
                'Scenic Railroads':false,
                'Historic Walking Areas':false,
                'Ski/Snowboard Areas':false,
                'State Parks':true,
                'Beaches':true,
                'Trails':false,
                'Biking Trails':false,
                'Waterfalls':true,
                'Bodies of Water':false,
                'Caverns/Caves':false,
                'Farms':false,
                'Forests':true,
                'Fountains':true,
                'Gardens':true,
                'Geologic Formations':true,
                'Hiking Trails':false,
                'Historic Walking Areas':false,
                'Horseback Riding':false,
                'Hot Springs/Geysers':true,
                'Islands':true,
                'Lookouts':false,
                'Mountains':true,
                'National Parks':true,
                'Nature/Wildlife Areas':false,
                'Parks':false,
            }
        },
        selectedActivities:"112, 123, 143,3434"
        
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
    $scope.loading = "true";
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
                $scope.loading = "false";
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