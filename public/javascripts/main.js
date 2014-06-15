'use strict';

require.config({
    baseUrl: 'javascripts',
    paths: {
        "jquery": 'https://code.jquery.com/jquery-1.9.1.min',
        "ractive": "//cdn.ractivejs.org/latest/ractive",
        "Lead": "Lead"
    }
});

require(['jquery','synth'], function($,s) {
    s.init();
    s.start();
    // $('#kick').click(function(){
    //     s.impulse();
    // });
});
