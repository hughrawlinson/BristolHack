'use strict';

define(["MelodySequencer"],function(MelodySequencer){
    function Lead(context, destination=context.destination, type = "triangle"){
        this.context = context;
        this.osc = context.createOscillator();
        this.lpf = context.createBiquadFilter();
        this.gain = context.createGain();
        this.lpf.frequency.value = 1500;
        this.lpf.Q.value = 20;
        this.lpf.type.value = "lowpass";
        this.lpf.gain.value = 1;
        this.osc.type = "triangle";
        this.osc.connect(this.lpf);
        this.gain.gain.value = 0;
        this.lpf.connect(this.gain);
        this.gain.connect(destination)
        this.osc.start(0);
        var controller = this;
        this.melseq = new MelodySequencer(0,function(freq, tempo){
            var t = tempo / 1000;
            t = t > 0.5 ? 0.5 : t;
            controller.gain.gain.value = 0;
            controller.osc.frequency.value = freq;
            controller.gain.gain.linearRampToValueAtTime(1, controller.context.currentTime+0.5*t);
            controller.gain.gain.linearRampToValueAtTime(0, controller.context.currentTime+0.95*t);
        });
    }
    return Lead;
});
