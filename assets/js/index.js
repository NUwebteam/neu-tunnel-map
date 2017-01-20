"use strict";

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts

let getMapRoute = (startLocation, endLocation) => {
    if (startLocation === 'snell' && endLocation === 'cabot') {
        $('#route-image').attr('src', './assets/img/sn_cb.png');
    } else if (startLocation === 'snell' && endLocation === 'churchill') {
        $('#route-image').attr('src', './assets/img/sn_ch.png');
    } else if (startLocation === 'snell' && endLocation === 'forsyth') {
        $('#route-image').attr('src', './assets/img/sn_fr.png');
    } else if (startLocation === 'snell' && endLocation === 'hayden') {
        $('#route-image').attr('src', './assets/img/sn_ha.png');
    } else if (startLocation === 'snell' && endLocation === 'richards') {
        $('#route-image').attr('src', './assets/img/sn_ri.png');
    } else if (startLocation === 'snell' && endLocation === 'snell-lib') {
        $('#route-image').attr('src', './assets/img/sn_sl.png');
    }
};

$('#direction-prompt').on('click', function() {
    $('.direction-container').addClass('slide-container');
});

$('#close-direction').on('click', function() {
    $('.direction-container').removeClass('slide-container');
});

$('#map-go').on('click', function() {
    let start = $('select[name="start-location"]').val();
    let end = $('select[name="end-location"]').val();
    $('.direction-container').removeClass('slide-container');
    getMapRoute(start,end);
    $('.route-container').addClass('show-route');
    $('#close-route').addClass('show-route');
});

$('#close-route').on('click', function() {
    $('.route-container').removeClass('show-route');
    $('#close-route').removeClass('show-route');
});
