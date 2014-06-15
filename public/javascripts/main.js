'use strict';

require.config({
    baseUrl: '/javascripts/',
    paths: {
        "jquery": 'https://code.jquery.com/jquery-1.9.1.min',
        "ractive": "//cdn.ractivejs.org/latest/ractive"
    }
});

require(['jquery','InstrumentManager'], function($,InstrumentManager) {
    var im = new InstrumentManager();
});
