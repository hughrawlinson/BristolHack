/* globals define*/
'use strict';
define([],function(){
    return {
        'rint': function(limit){
            return Math.floor(Math.random()*limit);
        },
        'mtof': function(note){
            var freq = 440.0 * Math.pow(2, (note - 69.0) / 12.0);
            return isFinite(freq)?freq:0.0;
        }
    };
});
