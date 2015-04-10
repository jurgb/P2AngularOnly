app.factory("APIservice", function($http){

    var APIservice = {};
    
    APIservice.index = function(){
        
        return  $http.get("/api/v1/todo");
    };

    return  TodoAPI;
});