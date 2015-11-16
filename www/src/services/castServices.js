/**
* Requests the feed RSS
*/
services.factory('Casts', function($http, $q, $window) {

    var PUBLIC = {},
        casts  = {};

    PUBLIC.request = function request () {
        return $q(function(resolve, reject) {
            $http.get('http://10.1.1.241:8100/index.xml',{
                transformResponse:function(data) {
                    // convert the data to JSON and provide
                    // it to the success function below
                    var x2js = new X2JS();
                    var json = x2js.xml_str2json( data );
                    return json;
                }
            }).success(function(response) {
                if(typeof response === 'object') {
                    casts = response.rss.channel.item;
                    resolve(casts);
                } else {
                    reject(response);
                }
            }).error(function(response) {
                console.error("failed to retrieve data");
                reject(response);
            });
        });
    };

    PUBLIC.search = function search (find) {
        var founds = [];
        if(casts){
            for (var i = 0; i < casts.length; i++) {
                var title = casts[i].title.toLowerCase();
                if(title.indexOf(find.toLowerCase()) !== -1){
                    founds.push(casts[i]);
                }
            }
        }
        return founds;
    };

    return PUBLIC;
});
