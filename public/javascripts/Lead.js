define([],function(){
    function Lead(context, destination=context.destination, type = "triangle"){
        this.context = context;
        this.osc = context.createOscillator();
        this.lpf = context.createBiquadFilter();
        this.lpf.frequency.value = 3000;
        this.lpf.Q.value = 20;
        this.lpf.type.value = "lowpass";
        this.osc.type = type;
        this.osc.connect(this.lpf);
        this.lpf.gain.value = 0;
        this.lpf.connect(destination);
        this.osc.start(0);
    }
    Lead.prototype.impulse = function(){
        this.lpf.gain.linearRampToValueAtTime(1, this.context.currentTime+0.01);
        this.lpf.gain.linearRampToValueAtTime(0, this.context.currentTime+0.5);
    }
    return Lead;
});
