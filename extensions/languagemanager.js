(function(ext) {
    
    HashMap = function(){
      this._dict = {};
    }
    HashMap.prototype._shared = {id: 1};
    HashMap.prototype.put = function put(key, value){
      if(typeof key == "object"){
        if(!key.hasOwnProperty._id){
          key.hasOwnProperty = function(key){
            return Object.prototype.hasOwnProperty.call(this, key);
          }
          key.hasOwnProperty._id = this._shared.id++;
        }
        this._dict[key.hasOwnProperty._id] = value;
      }else{
        this._dict[key] = value;
      }
      return this; // for chaining
    }
    HashMap.prototype.get = function get(key){
      if(typeof key == "object"){
        return this._dict[key.hasOwnProperty._id];
      }
      return this._dict[key];
    }
    
    var fr = new HashMap();
    
    var en = new HashMap();
    
    ext.registerMessage = function(name, message, lang) {
        if(lang == 'fr') fr.put(name, message);
        else en.put(name, message);
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
            ['r', 'Get message %s in %m.lang', 'getMessage', ' ', 'fr']
        ],
        menus: [ lang: ['en', 'fr'] ]
    };

    ScratchExtensions.register('Language Manager', descriptor, ext);
})({});