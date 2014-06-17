define(['jquery'],function($){
    'use strict';
    function Perc(){

        var kick = function(){
            $('#kick').get()[0].play();
        };

        var snare = function(){
            $('#snare').get()[0].play();
        };

        document.addEventListener('percTrigger',function(msg){
            if(msg.detail.message===false){
                kick();
            } else {
                snare();
            }
        },false);
    }

    return Perc;
});
