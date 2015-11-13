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
