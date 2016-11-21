(function(ext) {

    var toSend = true;

    ext.whenLoad = function() {
        return toSend;
    };
    
    ext._shutdown = function() {};

    ext._getStatus = function() {
        console.log("Status");
        return {status: 2, msg: 'Ready'};
    };

    var descriptor = {
        blocks: [
            ['h', 'When the webpage is load', 'whenLoad']
        ]
    };

    ScratchExtensions.register('Language Manager', descriptor, ext);
})({});
