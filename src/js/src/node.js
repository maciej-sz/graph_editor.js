var Uuid = require('uuid');

function Node(type, uuid, options, data){
    this._uuid = (uuid)? uuid : Uuid.v4();
}

/**
 * @returns {String}
 */
Node.prototype.getUuid = function(){
    return this._uuid;
};

module.exports = Node;