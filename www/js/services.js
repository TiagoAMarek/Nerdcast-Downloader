angular.module('NerdCast.services', [])

.factory('Casts', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
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

    return {
        all: function() {
            return chats;
        },
        remove: function(cast) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function(castId) {
            for (var i = 0; i < casts.length; i++) {
                if (casts[i].id === parseInt(castsId)) {
                    return casts[i];
                }
            }
        return null;
        }
    };
});
