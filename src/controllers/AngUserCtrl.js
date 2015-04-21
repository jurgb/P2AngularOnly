app.controller('UserCtrl', ['$scope', 'UserAPI', '$timeout','$log', function($scope, UserAPI, $timeout, $log) {

  var Users = [];    
    

  $scope.Users = allUsers;

  
  loadUsers();
  //*******************
  // Internal Methods
  //*******************
    
  function loadUsers() {
    destService.loadAll()
      .then(function(data){
        allUsers = data;
        $scope.Users = [].concat(data);
      })
  }
}])