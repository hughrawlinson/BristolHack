define(['utils'],function(u){
    var notes = [57, 59, 60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79];

    function MelodySequencer(frequency,callback){
        this.pattern = this.generatePattern();
        var tempo = 3500/this.pattern.length;
        var counter = 0;
        var controller = this;
        setInterval(function(){
            callback(u.mtof(controller.pattern[counter]+(frequency*12)),tempo);
            counter++;
            if (counter % controller.pattern.length === 0){ counter = 0; }
        },tempo);
    }
    MelodySequencer.prototype.generatePattern = function(){
        var len = u.rint(12)+4;
        len = len - (len%2);
        var pattern = [];
        for(var i = 0; i < len; i++){
            pattern.push(notes[u.rint(notes.length)]);
        }
        return pattern;
    };

    return MelodySequencer;
});
