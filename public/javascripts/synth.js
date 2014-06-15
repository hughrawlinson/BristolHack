'use strict';

var rint = function(limit){
    return Math.floor(Math.random()*limit);
}
var mtof = function(note){
    var freq = 440.0 * Math.pow(2, (note - 69.0) / 12.0);
    return isFinite(freq)?freq:0.0;
}

define(["Lead"],function(Lead){
    var self = {}

    var notes = [57, 59, 60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79]

    self.init = function(){
        self.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        self.os = [];

        // self.os.push(new Lead(self.audioCtx));
        self.pattern = self.generatePattern();
        self.tempo = 2500/self.pattern.length;
    }

    self.start = function(){
        var counter = 0;
        setInterval(function(){
            self.os[0].impulse(mtof(self.pattern[counter]));
            counter++;
            if (counter % self.pattern.length == 0) counter = 0;
        },self.tempo)
    }

    self.generatePattern = function(){
        var len = rint(16);
        len = len - (len%2);
        var pattern = [];
        for(var i = 0; i < len; i++){
            pattern.push(notes[rint(notes.length)]);
        }
        return pattern;
    }

    return self;
});
