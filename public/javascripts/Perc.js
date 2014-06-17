/* globals define */
'use strict';

define(['jquery'],function($){
    function Perc(){

        var kick = function(){
            $('#kick').get()[0].play();
        };

        var snare = function(){
            $('#snare').get()[0].play();
        };

        document.addEventListener('percTrigger',function(msg){
            msg.detail.message===false?kick():snare();
        },false);
    }

    return Perc;
});
