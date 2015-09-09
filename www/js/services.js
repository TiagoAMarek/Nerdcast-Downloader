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

.factory('Casts', function($http, $window) {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var PUBLIC = {};
    var casts = [{
    }];

    $http.get('http://localhost:8100/index.xml',
        {
            transformResponse:function(data) {
                // convert the data to JSON and provide
                // it to the success function below
                var x2js = new X2JS();
                var json = x2js.xml_str2json( data );
                return json;
            }
        }
    )
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
