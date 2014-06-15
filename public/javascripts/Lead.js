'use strict';

define(["MelodySequencer"],function(MelodySequencer){
    function Lead(context, bass=false, destination=context.destination, type = "triangle"){
        this.context = context;
        this.osc = context.createOscillator();
        this.lpf = context.createBiquadFilter();
        this.gain = context.createGain();
        this.lpf.frequency.value = bass?600:1500;
        this.lpf.Q.value = bass?35:20;
        this.lpf.type.value = "lowpass";
        this.lpf.gain.value = 1;
        this.osc.type = bass?"sawtooth":type;
        this.osc.connect(this.lpf);
        this.gain.value = 0;
        this.lpf.connect(this.gain);
        this.gain.connect(destination)
        this.osc.start(0);
        var controller = this;
        this.melseq = new MelodySequencer(bass?-2:0,function(freq){
            controller.osc.frequency.value = freq;
            controller.gain.gain.linearRampToValueAtTime(1, controller.context.currentTime+0.01);
            controller.gain.gain.linearRampToValueAtTime(0, controller.context.currentTime+0.5);
        });
    }
    return Lead;
});
