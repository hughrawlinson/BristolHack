'use strict';

define(["jquery"],function($){
    var v = $('#vis');
    function Vis(){
        this.canvas = v;
        this.context = this.canvas.get()[0].getContext('2d');
        var centerX = this.canvas.get()[0].width / 2;
        var centerY = this.canvas.get()[0].height / 2;
        var radius = 60;
        this.context.strokeStyle = '#FFFFFF';
        this.context.fillStyle = '#FFFFFF';
        console.log(radius*Math.cos(1*(Math.PI/180))+centerX,radius*Math.cos(1 * (Math.PI/180))+centerY);

        //radius*cos(i*radians(degrees))

        for (var i = 0; i <= 360; i++){
            this.context.fillRect(radius*Math.cos(i*2*(Math.PI/180))+centerX,radius*Math.sin(i * 2 * (Math.PI/180))+centerY,1,1);
        }
    }

    return Vis;
});
