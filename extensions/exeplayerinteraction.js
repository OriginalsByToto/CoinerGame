(function(ext) {
    
    ext.setTitle = function(message) {
        window.document.title = "[PlayerTitle]"+message;
    };
    
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    var descriptor = {
        blocks: [
            [' ', 'Change EXE Player message', 'setTitle', 'message']
        ]
    };

    ScratchExtensions.register('EXE Player interaction', descriptor, ext);
})({});