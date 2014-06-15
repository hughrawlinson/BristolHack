'use strict';

define(["jquery"],function($){
    function Perc(context, destination=context.destination){
        // this.context = context;
        // this.kick = context.createOscillator();
        // this.kick.frequency.value = 100;
        // this.kick.type.value = "square";
        // this.klpf = context.createBiquadFilter();
        // this.kgain = context.createGain();
        // this.kgain.gain.value = 0;
        // this.klpf.frequency.value = 400;
        // this.klpf.Q.value = 20;
        // this.klpf.type.value = "lowpass";
        // this.kick.connect(this.klpf);
        // this.klpf.connect(this.kgain);
        // this.kgain.connect(destination);
        // this.kgain.gain.value = 0;
        // this.kick.start(0);
        //
        // this.snare = context.createOscillator();
        // this.snare.type.value = "sawtooth";
        // this.snare.frequency.value = 300;
        // this.slpf = context.createBiquadFilter();
        // this.sgain = context.createGain();
        // this.sgain.gain.value = 0;
        // this.slpf.frequency.value = 200;
        // this.slpf.Q.value = 20;
        // this.slpf.type.value = "lowpass";
        // this.snare.connect(this.slpf);
        // this.slpf.connect(this.sgain);
        // this.sgain.connect(destination);
        // this.snare.start(0);
        //
        // var perrrrr = this;

        var kick = function(){
            // perrrrr.kgain.gain.linearRampToValueAtTime(1, perrrrr.context.currentTime+0.05);
            // perrrrr.kgain.gain.linearRampToValueAtTime(0, perrrrr.context.currentTime+0.3);
            $('#kick').get()[0].play()
        }

        var snare = function(){
            // perrrrr.sgain.gain.linearRampToValueAtTime(1, perrrrr.context.currentTime+0.001);
            // perrrrr.sgain.gain.linearRampToValueAtTime(0, perrrrr.context.currentTime+0.1);
            $('#snare').get()[0].play()
        }

        document.addEventListener('percTrigger',function(msg){
            msg.detail.message==false?kick():snare();
        },false);
    }

    Perc.prototype.kick = function(){
        this.kgain.gain.linearRampToValueAtTime(1, this.context.currentTime+0.5*t);
        this.kgain.gain.linearRampToValueAtTime(0, this.context.currentTime+0.95*t);
    }

    Perc.prototype.snare = function(){
        this.sgain.gain.linearRampToValueAtTime(1, this.context.currentTime+0.5*t);
        this.sgain.gain.linearRampToValueAtTime(0, this.context.currentTime+0.95*t);
    }

    return Perc;
});
