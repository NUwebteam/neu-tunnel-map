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
    } else if (startLocation === 'forsyth' && endLocation === 'churchill') {
        $('#route-image').attr('src', './assets/img/fr/fr_ch.png');
    } else if (startLocation === 'forsyth' && endLocation === 'cabot') {
        $('#route-image').attr('src', './assets/img/fr/fr_cb.png');
    } else if (startLocation === 'forsyth' && endLocation === 'curry') {
        $('#route-image').attr('src', './assets/img/fr/fr_csc.png');
    } else if (startLocation === 'forsyth' && endLocation === 'dodge') {
        $('#route-image').attr('src', './assets/img/fr/fr_dg.png');
    } else if (startLocation === 'forsyth' && endLocation === 'ell') {
        $('#route-image').attr('src', './assets/img/fr/fr_el.png');
    } else if (startLocation === 'forsyth' && endLocation === 'hayden') {
        $('#route-image').attr('src', './assets/img/fr/fr_ha.png');
    } else if (startLocation === 'forsyth' && endLocation === 'mugar') {
        $('#route-image').attr('src', './assets/img/fr/fr_mu.png');
    } else if (startLocation === 'forsyth' && endLocation === 'richards') {
        $('#route-image').attr('src', './assets/img/fr/fr_ri.png');
    } else if (startLocation === 'forsyth' && endLocation === 'snell-lib') {
        $('#route-image').attr('src', './assets/img/fr/fr_sl.png');
    } else if (startLocation === 'forsyth' && endLocation === 'snell') {
        $('#route-image').attr('src', './assets/img/fr/fr_sn.png');
    } else if (startLocation === 'mugar' && endLocation === 'cabot') {
        $('#route-image').attr('src', './assets/img/mu/mu_cb.png');
    } else if (startLocation === 'mugar' && endLocation === 'churchill') {
        $('#route-image').attr('src', './assets/img/mu/mu_ch.png');
    } else if (startLocation === 'mugar' && endLocation === 'curry') {
        $('#route-image').attr('src', './assets/img/mu/mu_csc.png');
    } else if (startLocation === 'mugar' && endLocation === 'dodge') {
        $('#route-image').attr('src', './assets/img/mu/mu_dg.png');
    } else if (startLocation === 'mugar' && endLocation === 'ell') {
        $('#route-image').attr('src', './assets/img/mu/mu_el.png');
    } else if (startLocation === 'mugar' && endLocation === 'forsyth') {
        $('#route-image').attr('src', './assets/img/mu/mu_fr.png');
    } else if (startLocation === 'mugar' && endLocation === 'hayden') {
        $('#route-image').attr('src', './assets/img/mu/mu_ha.png');
    } else if (startLocation === 'mugar' && endLocation === 'richards') {
        $('#route-image').attr('src', './assets/img/mu/mu_ri.png');
    } else if (startLocation === 'mugar' && endLocation === 'snell-lib') {
        $('#route-image').attr('src', './assets/img/mu/mu_sl.png');
    } else if (startLocation === 'mugar' && endLocation === 'snell') {
        $('#route-image').attr('src', './assets/img/mu/mu_sn.png');
    } else if (startLocation === 'dodge' && endLocation === 'cabot') {
        $('#route-image').attr('src', './assets/img/dg/dg_cb.png');
    } else if (startLocation === 'dodge' && endLocation === 'churchill') {
        $('#route-image').attr('src', './assets/img/dg/dg_ch.png');
    } else if (startLocation === 'dodge' && endLocation === 'curry') {
        $('#route-image').attr('src', './assets/img/dg/dg_csc.png');
    } else if (startLocation === 'dodge' && endLocation === 'ell') {
        $('#route-image').attr('src', './assets/img/dg/dg_el.png');
    } else if (startLocation === 'dodge' && endLocation === 'forsyth') {
        $('#route-image').attr('src', './assets/img/dg/dg_fr.png');
    } else if (startLocation === 'dodge' && endLocation === 'hayden') {
        $('#route-image').attr('src', './assets/img/dg/dg_ha.png');
    } else if (startLocation === 'dodge' && endLocation === 'mugar') {
        $('#route-image').attr('src', './assets/img/dg/dg_mu.png');
    } else if (startLocation === 'dodge' && endLocation === 'richards') {
        $('#route-image').attr('src', './assets/img/dg/dg_ri.png');
    } else if (startLocation === 'dodge' && endLocation === 'snell-lib') {
        $('#route-image').attr('src', './assets/img/dg/dg_sl.png');
    } else if (startLocation === 'dodge' && endLocation === 'snell') {
        $('#route-image').attr('src', './assets/img/dg/dg_sn.png');
    } else if (startLocation === 'ell' && endLocation === 'cabot') {
        $('#route-image').attr('src', './assets/img/el/el_cb.png');
    } else if (startLocation === 'ell' && endLocation === 'churchill') {
        $('#route-image').attr('src', './assets/img/el/el_ch.png');
    } else if (startLocation === 'ell' && endLocation === 'curry') {
        $('#route-image').attr('src', './assets/img/el/el_csc.png');
    } else if (startLocation === 'ell' && endLocation === 'dodge') {
        $('#route-image').attr('src', './assets/img/el/el_dg.png');
    } else if (startLocation === 'ell' && endLocation === 'forsyth') {
        $('#route-image').attr('src', './assets/img/el/el_fr.png');
    } else if (startLocation === 'ell' && endLocation === 'hayden') {
        $('#route-image').attr('src', './assets/img/el/el_ha.png');
    } else if (startLocation === 'ell' && endLocation === 'mugar') {
        $('#route-image').attr('src', './assets/img/el/el_mu.png');
    } else if (startLocation === 'ell' && endLocation === 'richards') {
        $('#route-image').attr('src', './assets/img/el/el_ri.png');
    } else if (startLocation === 'ell' && endLocation === 'snell-lib') {
        $('#route-image').attr('src', './assets/img/el/el_sl.png');
    } else if (startLocation === 'ell' && endLocation === 'snell') {
        $('#route-image').attr('src', './assets/img/el/el_sn.png');
    }
};

$('#direction-prompt').on('click', function() {
    $('.direction-container').removeClass('hide');
    setTimeout(function() {
        $('.direction-container').addClass('slide-container');
        $('.direction-container').addClass('slide-container');
        $('.route-container').removeClass('show-route');
        $('#close-route').removeClass('show-route');
    }, 250);
});

$('#close-direction').on('click', function() {
    $('.direction-container').removeClass('slide-container');
    setTimeout(function() {
        $('.direction-container').addClass('hide');
    }, 250);
    // $('.direction-container').delay(500).removeClass('hide');
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
        setTimeout(function() {
            $('.direction-container').addClass('hide');
        }, 250);
    }
});

$('#close-route').on('click', function() {
    $('.route-container').removeClass('show-route');
    $('#close-route').removeClass('show-route');
});

setTimeout(function() {
    $('.direction-prompt-container').removeClass('pulse');
}, 7500);
