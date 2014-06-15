'use strict';

define(["MelodySequencer"],function(MelodySequencer){
    function Lead(context, destination=context.destination, type = "triangle"){
        console.log("Lead Instantiated");
        this.context = context;
        this.osc = context.createOscillator();
        this.lpf = context.createBiquadFilter();
        this.gain = context.createGain();
        this.lpf.frequency.value = 3000;
        this.lpf.Q.value = 20;
        this.lpf.type.value = "lowpass";
        this.lpf.gain.value = 1;
        this.osc.type = type;
        this.osc.connect(this.lpf);
        this.gain.value = 0;
        this.lpf.connect(this.gain);
        this.gain.connect(destination)
        this.osc.start(0);
        var impulse = function(freq){
            console.log('this happens');
            this.osc.frequency.value = freq;
            this.gain.gain.linearRampToValueAtTime(1, this.context.currentTime+0.01);
            this.gain.gain.linearRampToValueAtTime(0, this.context.currentTime+0.5);
        }
        this.melseq = new MelodySequencer(impulse);
    }
    return Lead;
});
