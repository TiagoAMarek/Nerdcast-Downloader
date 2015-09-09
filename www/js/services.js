(function(){
    'use strict';

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

        PUBLIC.request = function(res, rej){
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
            .success(function(data) {
                res(data.rss.channel.item);
            })
            .error(function(err) {
                console.error("failed to retrieve data");
                rej();
            });
        };

        return PUBLIC;
    });
})();
