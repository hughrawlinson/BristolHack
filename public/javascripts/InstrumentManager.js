'use strict';

define(["Lead","Bass","Perc"],function(Lead,Bass,Perc){
    var InstrumentManager = function(){
        self.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        var instruments = [];

        instruments['lead1'] = new Lead(self.audioCtx);
        instruments['lead2'] = new Lead(self.audioCtx);
        instruments['bass'] = new Bass(self.audioCtx);
        instruments['perc'] = new Perc(self.audioCtx)

        //@todo: reverb
        //@todo: visualization
        //@todo: paypal
    }

    return InstrumentManager;
});
