'use strict';

define(["jquery","Lead","Bass","Perc"],function($,Lead,Bass,Perc){
    var InstrumentManager = function(){
        self.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        var instruments = [];

        $('#lead').click(function(){
            $(this).toggleClass('btn-danger');
            $(this).toggleClass('btn-primary');
            if(instruments['lead1']==undefined){
                instruments['lead1'] = new Lead(self.audioCtx);
            }
            else{
                delete instruments['lead1'];
            }
        });
        $('#backing').click(function(){
            $(this).toggleClass('btn-danger');
            $(this).toggleClass('btn-primary');
            if(instruments['lead2']==undefined){
                instruments['lead2'] = new Lead(self.audioCtx);
            }
            else{
                delete instruments['lead2'];
            }
        });
        $('#accompaniment').click(function(){
            $(this).toggleClass('btn-danger');
            $(this).toggleClass('btn-primary');
            if(instruments['bass']==undefined&&instruments['perc']==undefined){
                instruments['bass'] = new Bass(self.audioCtx);
                instruments['perc'] = new Perc(self.audioCtx);
            }
            else{
                delete instruments['bass'];
                delete instruments['perc'];
            }
        });


        //@todo: reverb
        //@todo: visualization
        //@todo: paypal
    }

    return InstrumentManager;
});
