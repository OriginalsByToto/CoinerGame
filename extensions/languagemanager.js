(function(ext) {

    
    var fr = {};
    
    var en = {};
    
    ext.clearData = function(lang) {
        if(lang == "fr") fr = {};
        else en = {};
    };
    
    ext.registerMessage = function(name, message, lang) {
        if(lang == 'fr') fr[name] = message;
        else en[name] = message;
    };
    
    ext.getMessage = function(name, lang) {
        if(lang == 'fr') return fr[name];
        else return en[name];
    };
    
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    var descriptor = {
        blocks: [
            [' ', 'Register %s with message %s in lang %m.lang', 'registerMessage', 'name', 'message', 'fr'],
            ['r', 'Get message %s in %s', 'getMessage', 'name', 'fr'],
            [' ', 'Clear data of lang %m.lang', 'clearData', 'fr']
        ],
        menus: {
            lang: ["fr", "en"]
        }
    };

    ScratchExtensions.register('Language Manager', descriptor, ext);
})({});
