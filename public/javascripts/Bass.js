/* globals define */
'use strict';

define(['MelodySequencer'],function(MelodySequencer){
    function Lead(context, destination=context.destination, type = 'sawtooth'){
        this.context = context;
        this.osc = context.createOscillator();
        this.lpf = context.createBiquadFilter();
        this.gain = context.createGain();
        this.lpf.frequency.value = 600;
        this.lpf.Q.value = 1;
        this.lpf.type.value = 'lowpass';
        this.lpf.gain.value = 1;
        this.osc.connect(this.lpf);
        this.osc.type = type;
        this.gain.gain.value = 0;
        this.lpf.connect(this.gain);
        this.gain.connect(destination);
        this.osc.start(0);
        var controller = this;
        controller.val = false;
        this.melseq = new MelodySequencer(-3,function(freq, tempo){
            document.dispatchEvent(new CustomEvent(
            	'percTrigger',
            	{
            		detail: {
            			message: controller.val,
            			time: new Date(),
            		},
            		bubbles: true,
            		cancelable: true
            	}
            ));
            controller.val = !controller.val;
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
