"use strict";

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
// let success;

let getMapRoute = (startLocation, endLocation) => {
    if (startLocation === 'snell' && endLocation === 'cabot') {
        $('#route-image').attr('src', './assets/img/sn/sn_cb.png');
    } else if (startLocation === 'snell' && endLocation === 'churchill') {
        $('#route-image').attr('src', './assets/img/sn/sn_ch.png');
    } else if (startLocation === 'snell' && endLocation === 'forsyth') {
        $('#route-image').attr('src', './assets/img/sn/sn_fr.png');
    } else if (startLocation === 'snell' && endLocation === 'hayden') {
        $('#route-image').attr('src', './assets/img/sn/sn_ha.png');
    } else if (startLocation === 'snell' && endLocation === 'richards') {
        $('#route-image').attr('src', './assets/img/sn/sn_ri.png');
    } else if (startLocation === 'snell' && endLocation === 'snell-lib') {
        $('#route-image').attr('src', './assets/img/sn/sn_sl.png');
    } else if (startLocation === 'snell' && endLocation === 'curry') {
        $('#route-image').attr('src', './assets/img/sn/sn_csc.png');
    } else if (startLocation === 'snell' && endLocation === 'dodge') {
        $('#route-image').attr('src', './assets/img/sn/sn_dg.png');
    } else if (startLocation === 'snell' && endLocation === 'ell') {
        $('#route-image').attr('src', './assets/img/sn/sn_el.png');
    } else if (startLocation === 'snell' && endLocation === 'mugar') {
        $('#route-image').attr('src', './assets/img/sn/sn_mu.png');
    }
};

$('#direction-prompt').on('click', function() {
    $('.direction-container').addClass('slide-container');
    $('.route-container').removeClass('show-route');
    $('#close-route').removeClass('show-route');
});

$('#close-direction').on('click', function() {
    $('.direction-container').removeClass('slide-container');
});

$('#map-go').on('click', function() {
    let start = $('select[name="start-location"]').val();
    let end = $('select[name="end-location"]').val();
    getMapRoute(start,end);
    if (start === end || start === '' && end === '' || end === '' || start === '') {
        $('.error-container').removeClass('hide');
    } else {
        $('.error-container').addClass('hide');
        $('.direction-container').removeClass('slide-container');
        $('.route-container').addClass('show-route');
        $('#close-route').addClass('show-route');
    }
});

$('#close-route').on('click', function() {
    $('.route-container').removeClass('show-route');
    $('#close-route').removeClass('show-route');
});
