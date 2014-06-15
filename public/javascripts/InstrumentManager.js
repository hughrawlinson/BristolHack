'use strict';

define(["Lead"],function(Lead){
    var InstrumentManager = function(){
        self.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        self.os = [];

        self.os.push(new Lead(self.audioCtx));
        self.os.push(new Lead(self.audioCtx));
        self.os.push(new Lead(self.audioCtx,true));
    }

    return InstrumentManager;
});
