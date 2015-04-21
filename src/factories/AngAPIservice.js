app.factory("APIservice", function($http){

    var APIservice = {};
    
    APIservice.activitycat = function(){
        return $http.get('http://api.uxplr.com/api/activity/categories', {
            headers: {'Api-Key': '285ag9syA6WMkVn916hw'}
        });
    };
    APIservice.departures = function(){
        return $http.get('http://api.uxplr.com/api/departures', {
            headers: {'Api-Key': '285ag9syA6WMkVn916hw'}
        });
    };
    APIservice.destinations = function(){
        return $http.get('http://api.uxplr.com/api/destinations', {
            params:{'UxplrSearch[departurePoint]':'BRU','UxplrSearch[dateFrom]':'2015-07-07','UxplrSearch[dateTo]':'2015-07-14'},
            headers: {'Api-Key': '285ag9syA6WMkVn916hw'}
        });
    };
    return  APIservice;
});