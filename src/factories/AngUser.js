app.factory('user', function() {
    var peopleResponse = {
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
        return {
            savePeopleResponse:function (data) {
                peopleResponse = data;
                console.log(data);
            },
            getPeopleResponse:function () {
                return peopleResponse;
            }
        };
});