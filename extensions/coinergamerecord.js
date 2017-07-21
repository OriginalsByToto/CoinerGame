new (function() {
    var ext = this;

    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.get_hs = function(callback) {
        console.log("Getting network highscore ...");
        $.ajax({
              url: '//api.originalsbytoto.com/coinergame/getrecord.php',
              success: function( result ) {
                  console.log("Actual highscore is : " + result);
                  callback(result);
              }
        });
    };
    
    ext.get_who = function(callback) {
        console.log("Getting network best player ...");
        $.ajax({
              url: '//api.originalsbytoto.com/coinergame/getwhorecord.php',
              success: function( result ) {
                  console.log("Actual best player is : " + result);
                  callback(result);
              }
        });
    };
    
    ext.add_score = function(score, username, callback) {
        console.log("Adding score to network ...");
        username = username.replace(" ", "%20");
        $.ajax({
              url: '//api.originalsbytoto.com/coinergame/addscore.php?user='+username+"&score="+score,
              success: function( result ) {
                  console.log("Result state for new score is : " + result);
                  callback(result);
              }
        });
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['R', 'Network Highscore', 'get_hs'],
            ['R', 'Network Best Player', 'get_who'],
            ['R', 'Add score %n of %s to Network', 'add_score', 0, ""],
        ]
    };

    // Register the extension
    ScratchExtensions.register('CoinerGame HighScore extension', descriptor, ext);
})();