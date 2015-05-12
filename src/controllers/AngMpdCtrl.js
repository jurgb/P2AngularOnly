app.controller("AngMpdController", function($scope, APIservice, $mdSidenav, $mdDialog, $http, user, trip, $filter){
    
//*******************
// INIT LOADING
//*******************
$scope.loading = "true";
$scope.showerror = false;
$scope.error = null;
//*******************
// INIT ALL ARRAYS
//******************* 
$scope.activitycategories = [];
$scope.departurepoints = [];
$scope.cardestinations = [];
$scope.skidestinations = [];
$scope.flydestinations = [];
$scope.sundestinations = [];

$scope.selectedUsertab = null;
$scope.selectedVacType = null;

$scope.tripsettings = trip.getPeopleResponse();

// USER
$scope.user = user.getPeopleResponse();
//$scope.user = {
//        email: 'Jurgenbarbier@gmail.com',
//        firstName: 'Jurgen',
//        lastName: 'Barbier' ,
//        address: 'Heidestraat 88' ,
//        city: 'Schelle' ,
//        biography: 'I created this app',
//        postalCode : '2627',
//        hotelmin: "1",
//        hotelmax: "5",
//        departurepoint:{
//            label: 'Brussels (BRU)',
//            value: 'BRU'
//        },
//        food:"7",
//        travel:{
//            airtravel:true,
//            cartravel:true,
//            traintravel:false,
//            boattravel:true
//        },
//        selectedData:{
//            Attractions:{
//                'Religious Sites': false,
//                'Science Musueams':false,
//                'Ships':true,
//                'Specialty Museums':false,
//                'Piers/Boardwalks':true,
//                'Wineries':false,
//                'Zoos':false,
//                'Bridges':false,
//                'Ancient Ruins':false,
//                'Castles': true,
//                'Cemeteries': false,
//                "Children's Museums": false,
//                'Churches/Cathedrals':true,
//                'Aquariums': true,
//                'Architectural Buildings': true,
//                'Historic Sites':false,
//                'Historic Museums':false,
//                'Landmarks': true,
//                'Art Gallaries': false,
//                'Military Museums':false,
//                'Monuments/Statues': true,
//                'Art Museums': false,
//                'Museums': false,
//                'Natural History': false,
//                'Neighborhoods': true,
//                'Observation Decks': true,
//                'Planetariums': true
//            },
//            Entertainment:{
//                'Theme Parks':true,
//                'Bar/Clubs':true,
//                'Shops':true,
//                'Specialty Shops':false,
//                'Sports Camps':true,
//                'Sport Complexes':true,
//                'Theaters':false,
//                'Tours':true,
//                'Water Parks':true,
//                'Casinos':false,
//                'Concerts':false,
//                'Dinner Theaters':false,
//                'Educational Sites':false,
//                'Factory Tours':false,
//                'Entertainment Centers':true,
//                'Golf Courses':false,
//                'Health Clubs':true,
//                'Arenas/Stadiums':false,
//                'Liberaries':false,
//                'Malls':true,
//                'Movie Theaters':true,
//                'Operas':false,
//                'Performances':false,
//                'Playgrounds':false,
//            },
//            Outdoors:{
//                'Reefs':true,
//                'Scenic Dives':true,
//                'Scenic Railroads':false,
//                'Historic Walking Areas':false,
//                'Ski/Snowboard Areas':false,
//                'State Parks':true,
//                'Beaches':true,
//                'Trails':false,
//                'Biking Trails':false,
//                'Waterfalls':true,
//                'Bodies of Water':false,
//                'Caverns/Caves':false,
//                'Farms':false,
//                'Forests':true,
//                'Fountains':true,
//                'Gardens':true,
//                'Geologic Formations':true,
//                'Hiking Trails':false,
//                'Historic Walking Areas':false,
//                'Horseback Riding':false,
//                'Hot Springs/Geysers':true,
//                'Islands':true,
//                'Lookouts':false,
//                'Mountains':true,
//                'National Parks':true,
//                'Nature/Wildlife Areas':false,
//                'Parks':false,
//            }
//        },
//        selectedActivities:"112, 123"
//        
//};
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
      iconurl: './assets/images/icons/car.svg'
  }, {
      id:'2',
      name: 'Ski vacations',
      iconurl: './assets/images/icons/ski.svg'
  }, {
      id:'3',
      name: 'Sun vacations',
      iconurl: './assets/images/icons/sun.svg'
  }, {
      id:'4',
      name: 'Fly vacations',
      iconurl: './assets/images/icons/plane.svg'
  }];
$scope.selectedVacType = $scope.vacationtypes[0];
$scope.selectVacType = selectVacType;
function selectVacType(muppet) {
    $scope.selectedVacType = angular.isNumber(muppet) ? $scope.vacationtypes[muppet] : muppet;
    $scope.loading = "true";
    $scope.toggleSidenav('left');
}
    
//*******************
// Basic trip settings
//*******************    
$scope.plantrip = function(add){
        console.log("test");
//        var data = {
//            return: $filter('date')($scope.newtrip.departure, "yyyy-MM-dd"),
//            departure:$filter('date')($scope.newtrip.return, "yyyy-MM-dd"),
//            budget:$scope.newtrip.budget
//        }
//        console.log(data);
    trip.savePeopleResponse($scope.tripsettings);
//        $scope.tripsettings.departure = $filter('date')($scope.newtrip.departure, "yyyy/MM/dd");
//        $scope.tripsettings.return = $filter('date')($scope.newtrip.return, "yyyy/MM/dd");
//        $scope.tripsettings.budget = $scope.newtrip.budget;
//        console.log($scope.tripsettings.departure);
//        console.log($scope.tripsettings.return);
//        console.log($scope.tripsettings.budget);
        window.location = "#/results";
    };
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

    if(dest.distance.miles < 900)
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
                $scope.loading = false;
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
                $scope.loading = false;
            });
};

    $scope.cardestinations = function(){
        console.log($scope.tripsettings);
      //Alle notifications binnehalen en in scope stoppen
        params = {'UxplrSearch[departurePoint]':$scope.user.departurepoint,'UxplrSearch[dateFrom]':$scope.tripsettings.departurestring,'UxplrSearch[dateTo]':$scope.tripsettings.returnstring, 'UxplrSearch[requiredActivities]':'','UxplrSearch[optionalActivities]':'1, 134, 21'};
		APIservice.destinations(params)
			.success(function(data){
                
				$scope.cardestinations = data;

                console.log(data);
                $scope.loading = false;
                
			})
            .error(function(){
                console.log("fail");
                $scope.loading = false;
        });
    };
    
    $scope.skidestinations = function(){
      //Alle notifications binnehalen en in scope stoppen
        params = {'UxplrSearch[departurePoint]':$scope.user.departurepoint,'UxplrSearch[dateFrom]':$scope.tripsettings.departurestring,'UxplrSearch[dateTo]':$scope.tripsettings.returnstring,'UxplrSearch[temperature]':'{"0":{"min":"cold","max":"cool"}}','UxplrSearch[requiredActivities]':'112'};
		APIservice.destinations(params)
			.success(function(data){
                
				$scope.skidestinations = data;

                console.log(data);
                $scope.loading = false;
                
			})
            .error(function(){
                console.log("fail");
                $scope.loading = false;
            });
    };
    $scope.sundestinations = function(){
      //Alle notifications binnehalen en in scope stoppen
        params = {'UxplrSearch[departurePoint]':$scope.user.departurepoint,'UxplrSearch[dateFrom]':$scope.tripsettings.departurestring,'UxplrSearch[dateTo]':$scope.tripsettings.returnstring,'UxplrSearch[temperature]':'{"0":{"min":"warm","max":"hot"}}'};
		APIservice.destinations(params)
			.success(function(data){
                
				$scope.sundestinations = data;

                console.log(data);
                $scope.loading = false;
                
			})
            .error(function(){
                console.log("fail");
                $scope.loading = false;
        });
    };
        $scope.flydestinations = function(){
      //Alle notifications binnehalen en in scope stoppen
        params = {'UxplrSearch[departurePoint]':$scope.user.departurepoint,'UxplrSearch[dateFrom]':$scope.tripsettings.departurestring,'UxplrSearch[dateTo]':$scope.tripsettings.returnstring, 'UxplrSearch[requiredActivities]':'','UxplrSearch[optionalActivities]':'1, 134, 21'};
		APIservice.destinations(params)
			.success(function(data){
                
				$scope.flydestinations = data;

                console.log(data);
            $scope.loading = false;
                
			})
            .error(function(){
                console.log("fail");
                $scope.loading = false;
        });
    };
//*******************
// DIALOG MESSAGES
//******************* 

$scope.showAdvanced = function(data) {
    $mdDialog.show({
        parent: angular.element(document.body),
        controller: DialogController,
        templateUrl: './views/dialog/dialog.html',
        disableParentScroll: false,
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
//    $scope.login = function(add){
//        $http.get("./views/php/login.php",{'email':$scope.loginuser.email, 'password':$scope.loginuser.password})
//        .success(function(data, status, headers, config){
//            console.log(data);
//            console.log("collected succesfully");
//            console.log($scope.loginuser);
//            user.savePeopleResponse($scope.loginuser);
//            console.log(user.getPeopleResponse);
//            window.location = "#/app";
//        });
//    };
    $scope.login = function(add){
        $scope.showerror = false;
            if ($scope.loginuser.username == "jurgb") {
                if ($scope.loginuser.password == "3imda") {
                    window.location = "#/profile";
                }else{
                    $scope.loginuser.username = null;
                    $scope.loginuser.password = null;
                    $scope.error = "Please provide a valid password ";
                    $scope.showerror = true;
                }
            }else{
                if ($scope.loginuser.username == "Jurgb") {
                    if ($scope.loginuser.password == "3imda") {
                        window.location = "#/profile";
                    }else{
                        $scope.loginuser.username = null;
                        $scope.loginuser.password = null;
                        $scope.error = "Please provide a valid password ";
                        $scope.showerror = true;
                    }
                }else{
                    $scope.loginuser.username = null;
                    $scope.loginuser.password = null;
                    $scope.error = "Please get an autorised username";
                    $scope.showerror = true;
                }
            }
    };
});