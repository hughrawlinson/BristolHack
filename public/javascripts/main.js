'use strict';

require.config({
    baseUrl: '/javascripts/',
    paths: {
        "jquery": 'https://code.jquery.com/jquery-1.9.1.min',
        "ractive": "//cdn.ractivejs.org/latest/ractive",
        "jquery.bootstrap": "//maxcdn.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min"
    },
    shim: {
        "jquery.bootstrap": {
            deps: ["jquery"]
        }
    }
});

require(['jquery','InstrumentManager','Vis',"jquery.bootstrap"], function($,InstrumentManager,Vis) {
    // $('#paypal').modal();
    // $(document).ready(function(){
    //     var v = new Vis();
    // })



    var im = new InstrumentManager();
});
