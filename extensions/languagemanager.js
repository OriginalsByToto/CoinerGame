(function(ext) {

    
    var fr = new Map();
    
    var en = new Map();
    
    ext.registerMessage = function(name, message, lang) {
        if(lang == 'fr') fr.set(name, message);
        else en.set(name, message);   
    };
    
    ext.getMessage = function(name, lang) {
        if(lang == 'fr') return fr.get(name);
        else return en.get(name);
    };
    
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    var descriptor = {
        blocks: [
            [' ', 'Register %s with message %s in lang %m.lang', 'registerMessage', 'name', 'message', 'fr'],
            ['r', 'Get message %s in %m.lang', 'getMessage', 'name', 'fr']
        ],
        menus: {
            lang: ["fr", "en"]
        }
    };

    ScratchExtensions.register('Language Manager', descriptor, ext);
})({});