var Node = require('./node.js');
var _ = require('underscore');
var Backbone = require('backbone');

function NodesContainer(){
    _.extend(this, Backbone.Events);
    this._nodes = {};
}

NodesContainer.ON_BEFORE_ADD_NODE = "onBeforeAddNode";
NodesContainer.ON_AFTER_ADD_NODE = "onAfterAddNode";

/**
 * @returns {Node[]}
 */
NodesContainer.prototype.getNodes = function(){
    return this._nodes;
};

/**
 * @param {Function} predicate
 * @returns {Node}
 */
NodesContainer.prototype.findNode = function(predicate){
    return _.find(this._nodes, predicate);
};

NodesContainer.prototype.addNode = function(node){
    console.log(node instanceof Node);
    this.trigger(NodesContainer.ON_BEFORE_ADD_NODE, this, node);
    this._nodes[node.getUuid()] = node;
    this.trigger(NodesContainer.ON_AFTER_ADD_NODE, this, node);
};

module.exports = NodesContainer;