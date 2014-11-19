
var n = require('./src/node.js');
console.log(n);

exports.Canvas = require('./src/canvas.js');
exports.Foo = require('./src/node.js');

console.log(exports.Foo);