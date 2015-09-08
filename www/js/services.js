angular.module('NerdCast.services', [])

.factory('Header', function() {
    var header = {
        name: "Nerdcast Downloader"
    };

    return {
        all: function() {
            return header;
        }
    }
})

.factory('Casts', function($http) {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var PUBLIC = {};
    var casts = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }];

    $http.get('http://jovemnerd.com.br/categoria/nerdcast/feed/')
    .success(function(response) {
        console.log(response);
    })
    .error(function(response) {
    });

    PUBLIC.all =  function() {
        return casts;
    };

    PUBLIC.remove = function(cast) {
        casts.splice(casts.indexOf(cast), 1);
    };

    PUBLIC.get =  function(castId) {
        for (var i = 0; i < casts.length; i++) {
            if (casts[i].id === parseInt(castsId)) {
                return casts[i];
            }
        }

        return null;
    };

    return PUBLIC;
});
