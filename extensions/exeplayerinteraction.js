(function(ext) {
    
    ext.setTitle = function(message) {
        window.document.title = "[PlayerTitle]"+message;
        parent.window.document.title = "[PlayerTitle]"+message;
    };
    
    ext.executeFn = function(message) {
        window.document.title = "[PlayerFunction]"+message;
        parent.window.document.title = "[PlayerFunction]"+message;
    };
    
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    var descriptor = {
        blocks: [
            [' ', 'Change EXE Player message to %s', 'setTitle', 'message'],
            [' ', 'Execute external C# function %s', 'executeFn', ' ']
        ]
    };

    ScratchExtensions.register('EXE Player interaction', descriptor, ext);
})({});