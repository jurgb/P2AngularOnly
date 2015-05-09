app.controller("AngMpdController", function($scope, APIservice, $mdSidenav, $mdDialog, $http){
    
//*******************
// INIT LOADING
//*******************
$scope.loading = "true";

//*******************
// INIT ALL ARRAYS
//******************* 
$scope.activitycategories = [];
$scope.departurepoints = [];
$scope.destinations = [];
$scope.selectedUsertab = null;
$scope.selectedVacType = null;
$scope.booktrip = null;
    
// USER
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
        selectedActivities:"112, 123"
        
};
//*******************
// USERTABS
//******************* 
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
$scope.selectedUsertab = $scope.usertabs[0];
$scope.selectUsertab = selectUsertab;
function selectUsertab(muppet) {
    $scope.selectedUsertab = angular.isNumber(muppet) ? $scope.usertabs[muppet] : muppet;
    $scope.loading = "true";
    $scope.toggleSidenav('left');
  }

//*******************
// VACATION TYPES
//*******************     
$scope.vacationtypes = [{
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
$scope.selectedVacType = $scope.vacationtypes[0];
$scope.selectVacType = selectVacType;
function selectVacType(muppet) {
    $scope.selectedVacType = angular.isNumber(muppet) ? $scope.vacationtypes[muppet] : muppet;
    $scope.loading = "true";
    $scope.toggleSidenav('left');
  }
//*******************
// SIDENAV TOGGLE
//******************* 
    
$scope.toggleSidenav = toggleSidenav;
    function toggleSidenav(name) {
        $mdSidenav(name).toggle();
}
    
//*******************
// CUSTOM FILTERS
//******************* 
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
//*******************
// API CALLS
//*******************    
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
                $mdDialog.show(
                  $mdDialog.alert()
                    .parent(angular.element(document.body))
                    .title('Error!')
                    .content('the connection to the databank seems to be interupted!')
                    .ariaLabel('Alert Dialog')
                    .ok('Close')
                    .targetEvent(ev)
                );
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
                $mdDialog.show(
                  $mdDialog.alert()
                    .parent(angular.element(document.body))
                    .title('Error!')
                    .content('the connection to the databank seems to be interupted!')
                    .ariaLabel('Alert Dialog')
                    .ok('Close')
                    .targetEvent(ev)
                );
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
                $mdDialog.show(
                  $mdDialog.alert()
                    .parent(angular.element(document.body))
                    .title('Error!')
                    .content('the connection to the databank seems to be interupted!')
                    .ariaLabel('Alert Dialog')
                    .ok('Close')
                    .targetEvent(ev)
                );
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
                $mdDialog.show(
                  $mdDialog.alert()
                    .parent(angular.element(document.body))
                    .title('Error!')
                    .content('the connection to the databank seems to be interupted!')
                    .ariaLabel('Alert Dialog')
                    .ok('Close')
                    .targetEvent(ev)
                );
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
                $mdDialog.show(
                  $mdDialog.alert()
                    .parent(angular.element(document.body))
                    .title('Error!')
                    .content('the connection to the databank seems to be interupted!')
                    .ariaLabel('Alert Dialog')
                    .ok('Close')
                    .targetEvent(ev)
                );
            });
    };
//*******************
// DIALOG MESSAGES
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
        $scope.booktrip = answer;
        window.location = "#/book";
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

    
//***********************
// User related functions
//***********************
    $scope.adduser = function(add){
        $http.post("./views/php/newuser.php",{'firstname': $scope.newuser.firstName, 'lastname': $scope.newuser.lastName, 'email':$scope.newuser.email, 'password':$scope.newuser.password})
        .success(function(data, status, headers, config){
            console.log(data);
            console.log("inserted Successfully");
        });
    };
    $scope.login = function(add){
        $http.get("./views/php/login.php",{'email':$scope.loginuser.email, 'password':$scope.loginuser.password})
        .success(function(data, status, headers, config){
            console.log(data);
            console.log("collected succesfully");
        });
    };
});