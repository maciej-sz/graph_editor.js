#!/usr/bin/env node

(function() {
    'use strict';

    var compressor = require('node-minify');

    var fileIn = __dirname + "/../dist/js/graph_editor.js";
    var fileOut = __dirname + "/../dist/js/graph_editor-min.js";

    new compressor.minify({
        type: "uglifyjs",
        fileIn: fileIn,
        fileOut: fileOut,
        callback: function(err){
        }
    });

})();