var Node = require('./node.js');

function Canvas(editor){
    console.log(editor instanceof Node);
}



Canvas.prototype.getNodeByUuid = function(uuid){};

Canvas.prototype.findNode = function(predicate){};

module.exports = Canvas;