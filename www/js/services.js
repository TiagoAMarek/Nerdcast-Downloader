'use strict';

var services = angular.module('NerdCast.services', []);

/**
* Requests the feed RSS
*/
services.factory('Casts', function($http, $q, $window) {

    var PUBLIC = {};

    PUBLIC.request = function request () {
        return $q(function(resolve, reject) {
            $http.get('http://localhost:8100/index.xml',{
                transformResponse:function(data) {
                    // convert the data to JSON and provide
                    // it to the success function below
                    var x2js = new X2JS();
                    var json = x2js.xml_str2json( data );
                    return json;
                }
            }).success(function(response) {
                if(typeof response === 'object') {
                    resolve(response.rss.channel.item);
                } else {
                    reject(response);
                }
            }).error(function(response) {
                console.error("failed to retrieve data");
                reject(response);
            });
        });
    };

    return PUBLIC;
});

services.factory('Header', function() {
    var header = {
        name: "Nerdcast Downloader"
    };

    return {
        all: function() {
            return header;
        }
    }
});
