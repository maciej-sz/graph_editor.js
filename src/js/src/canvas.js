var Node = require('./node.js');

Canvas = function(editor){
    console.log(editor instanceof Node);
};

Canvas.prototype.getNodeByUuid = function(uuid){};

exports = Canvas;