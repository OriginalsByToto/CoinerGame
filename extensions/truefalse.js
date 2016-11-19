(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};
    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.false_block = function() {
        return false;
    };
	
    ext.true_block = function() {
        return true;
    };
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name, param1 default value, param2 default value
            ['b', 'false', 'false_block'],
			['b', 'true', 'true_block'],
        ]
    };
    // Register the extension
    ScratchExtensions.register('Boolean blocks', descriptor, ext);
})({});