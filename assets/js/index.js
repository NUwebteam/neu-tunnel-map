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
    } else if (startLocation === 'churchill' && endLocation === 'cabot') {
        $('#route-image').attr('src', './assets/img/ch/ch_cb.png');
    } else if (startLocation === 'churchill' && endLocation === 'curry') {
        $('#route-image').attr('src', './assets/img/ch/ch_csc.png');
    } else if (startLocation === 'churchill' && endLocation === 'dodge') {
        $('#route-image').attr('src', './assets/img/ch/ch_dg.png');
    } else if (startLocation === 'churchill' && endLocation === 'ell') {
        $('#route-image').attr('src', './assets/img/ch/ch_el.png');
    } else if (startLocation === 'churchill' && endLocation === 'forsyth') {
        $('#route-image').attr('src', './assets/img/ch/ch_fr.png');
    } else if (startLocation === 'churchill' && endLocation === 'hayden') {
        $('#route-image').attr('src', './assets/img/ch/ch_ha.png');
    } else if (startLocation === 'churchill' && endLocation === 'mugar') {
        $('#route-image').attr('src', './assets/img/ch/ch_mu.png');
    } else if (startLocation === 'churchill' && endLocation === 'richards') {
        $('#route-image').attr('src', './assets/img/ch/ch_ri.png');
    } else if (startLocation === 'churchill' && endLocation === 'snell-lib') {
        $('#route-image').attr('src', './assets/img/ch/ch_sl.png');
    } else if (startLocation === 'churchill' && endLocation === 'snell') {
        $('#route-image').attr('src', './assets/img/ch/ch_sn.png');
    } else if (startLocation === 'curry' && endLocation === 'cabot') {
        $('#route-image').attr('src', './assets/img/csc/csc_cb.png');
    } else if (startLocation === 'curry' && endLocation === 'churchill') {
        $('#route-image').attr('src', './assets/img/csc/csc_ch.png');
    } else if (startLocation === 'curry' && endLocation === 'dodge') {
        $('#route-image').attr('src', './assets/img/csc/csc_dg.png');
    } else if (startLocation === 'curry' && endLocation === 'ell') {
        $('#route-image').attr('src', './assets/img/csc/csc_el.png');
    } else if (startLocation === 'curry' && endLocation === 'forsyth') {
        $('#route-image').attr('src', './assets/img/csc/csc_fr.png');
    } else if (startLocation === 'curry' && endLocation === 'hayden') {
        $('#route-image').attr('src', './assets/img/csc/csc_ha.png');
    } else if (startLocation === 'curry' && endLocation === 'mugar') {
        $('#route-image').attr('src', './assets/img/csc/csc_mu.png');
    } else if (startLocation === 'curry' && endLocation === 'richards') {
        $('#route-image').attr('src', './assets/img/csc/csc_ri.png');
    } else if (startLocation === 'curry' && endLocation === 'snell-lib') {
        $('#route-image').attr('src', './assets/img/csc/csc_sl.png');
    } else if (startLocation === 'curry' && endLocation === 'snell') {
        $('#route-image').attr('src', './assets/img/csc/csc_sn.png');
    } else if (startLocation === 'cabot' && endLocation === 'churchill') {
        $('#route-image').attr('src', './assets/img/cb/cb_ch.png');
    } else if (startLocation === 'cabot' && endLocation === 'curry') {
        $('#route-image').attr('src', './assets/img/cb/cb_csc.png');
    } else if (startLocation === 'cabot' && endLocation === 'dodge') {
        $('#route-image').attr('src', './assets/img/cb/cb_dg.png');
    } else if (startLocation === 'cabot' && endLocation === 'ell') {
        $('#route-image').attr('src', './assets/img/cb/cb_el.png');
    } else if (startLocation === 'cabot' && endLocation === 'forsyth') {
        $('#route-image').attr('src', './assets/img/cb/cb_fr.png');
    } else if (startLocation === 'cabot' && endLocation === 'hayden') {
        $('#route-image').attr('src', './assets/img/cb/cb_ha.png');
    } else if (startLocation === 'cabot' && endLocation === 'mugar') {
        $('#route-image').attr('src', './assets/img/cb/cb_mu.png');
    } else if (startLocation === 'cabot' && endLocation === 'richards') {
        $('#route-image').attr('src', './assets/img/cb/cb_ri.png');
    } else if (startLocation === 'cabot' && endLocation === 'snell-lib') {
        $('#route-image').attr('src', './assets/img/cb/cb_sl.png');
    } else if (startLocation === 'cabot' && endLocation === 'snell') {
        $('#route-image').attr('src', './assets/img/cb/cb_sn.png');
    } else if (startLocation === 'hayden' && endLocation === 'cabot') {
        $('#route-image').attr('src', './assets/img/ha/ha_cb.png');
    } else if (startLocation === 'hayden' && endLocation === 'churchill') {
        $('#route-image').attr('src', './assets/img/ha/ha_ch.png');
    } else if (startLocation === 'hayden' && endLocation === 'curry') {
        $('#route-image').attr('src', './assets/img/ha/ha_csc.png');
    } else if (startLocation === 'hayden' && endLocation === 'dodge') {
        $('#route-image').attr('src', './assets/img/ha/ha_dg.png');
    } else if (startLocation === 'hayden' && endLocation === 'ell') {
        $('#route-image').attr('src', './assets/img/ha/ha_el.png');
    } else if (startLocation === 'hayden' && endLocation === 'forsyth') {
        $('#route-image').attr('src', './assets/img/ha/ha_fr.png');
    } else if (startLocation === 'hayden' && endLocation === 'mugar') {
        $('#route-image').attr('src', './assets/img/ha/ha_mu.png');
    } else if (startLocation === 'hayden' && endLocation === 'richards') {
        $('#route-image').attr('src', './assets/img/ha/ha_ri.png');
    } else if (startLocation === 'hayden' && endLocation === 'snell-lib') {
        $('#route-image').attr('src', './assets/img/ha/ha_sl.png');
    } else if (startLocation === 'hayden' && endLocation === 'snell') {
        $('#route-image').attr('src', './assets/img/ha/ha_sn.png');
    } else if (startLocation === 'richards' && endLocation === 'cabot') {
        $('#route-image').attr('src', './assets/img/ri/ri_cb.png');
    } else if (startLocation === 'richards' && endLocation === 'churchill') {
        $('#route-image').attr('src', './assets/img/ri/ri_ch.png');
    } else if (startLocation === 'richards' && endLocation === 'curry') {
        $('#route-image').attr('src', './assets/img/ri/ri_csc.png');
    } else if (startLocation === 'richards' && endLocation === 'dodge') {
        $('#route-image').attr('src', './assets/img/ri/ri_dg.png');
    } else if (startLocation === 'richards' && endLocation === 'ell') {
        $('#route-image').attr('src', './assets/img/ri/ri_el.png');
    } else if (startLocation === 'richards' && endLocation === 'forsyth') {
        $('#route-image').attr('src', './assets/img/ri/ri_fr.png');
    } else if (startLocation === 'richards' && endLocation === 'hayden') {
        $('#route-image').attr('src', './assets/img/ri/ri_ha.png');
    } else if (startLocation === 'richards' && endLocation === 'mugar') {
        $('#route-image').attr('src', './assets/img/ri/ri_mu.png');
    } else if (startLocation === 'richards' && endLocation === 'snell-lib') {
        $('#route-image').attr('src', './assets/img/ri/ri_sl.png');
    } else if (startLocation === 'richards' && endLocation === 'snell') {
        $('#route-image').attr('src', './assets/img/ri/ri_sn.png');
    } else if (startLocation === 'snell-lib' && endLocation === 'cabot') {
        $('#route-image').attr('src', './assets/img/sl/sl_cb.png');
    } else if (startLocation === 'snell-lib' && endLocation === 'churchill') {
        $('#route-image').attr('src', './assets/img/sl/sl_ch.png');
    } else if (startLocation === 'snell-lib' && endLocation === 'curry') {
        $('#route-image').attr('src', './assets/img/sl/sl_csc.png');
    } else if (startLocation === 'snell-lib' && endLocation === 'dodge') {
        $('#route-image').attr('src', './assets/img/sl/sl_dg.png');
    } else if (startLocation === 'snell-lib' && endLocation === 'ell') {
        $('#route-image').attr('src', './assets/img/sl/sl_el.png');
    } else if (startLocation === 'snell-lib' && endLocation === 'forsyth') {
        $('#route-image').attr('src', './assets/img/sl/sl_fr.png');
    } else if (startLocation === 'snell-lib' && endLocation === 'mugar') {
        $('#route-image').attr('src', './assets/img/sl/sl_mu.png');
    } else if (startLocation === 'snell-lib' && endLocation === 'hayden') {
        $('#route-image').attr('src', './assets/img/sl/sl_ha.png');
    } else if (startLocation === 'snell-lib' && endLocation === 'richards') {
        $('#route-image').attr('src', './assets/img/sl/sl_ri.png');
    } else if (startLocation === 'snell-lib' && endLocation === 'snell') {
        $('#route-image').attr('src', './assets/img/sl/sl_sn.png');
    }
};

$('#direction-prompt').on('click', function() {
    let start = $('select[name="start-location"]').val();
    let end = $('select[name="end-location"]').val();
    getMapRoute(start,end);
    if (start === end || start === '' && end === '' || end === '' || start === '') {
        $('.error-container').removeClass('hide');
    } else {
        $('.error-container').addClass('hide');
        $('.route-container').addClass('show-route');
        $('#close-route').addClass('show-route');
        $('.direction-prompt-container').removeClass('show-direction');
        $('.direction-form-wrapper').removeClass('show-direction');
    }
});

// $('#close-direction').on('click', function() {
//     $('.direction-container').removeClass('slide-container');
//     setTimeout(function() {
//         $('.direction-container').addClass('hide');
//     }, 250);
//     // $('.direction-container').delay(500).removeClass('hide');
// });

// $('#map-go').on('click', function() {
//     let start = $('select[name="start-location"]').val();
//     let end = $('select[name="end-location"]').val();
//     getMapRoute(start,end);
//     if (start === end || start === '' && end === '' || end === '' || start === '') {
//         $('.error-container').removeClass('hide');
//     } else {
//         $('.error-container').addClass('hide');
//         $('.direction-container').removeClass('slide-container');
//         $('.route-container').addClass('show-route');
//         $('#close-route').addClass('show-route');
//         setTimeout(function() {
//             $('.direction-container').addClass('hide');
//         }, 250);
//     }
// });

$('#close-route').on('click', function() {
    $('.route-container').removeClass('show-route');
    $('#close-route').removeClass('show-route');
    $('.direction-prompt-container').addClass('show-direction');
    $('.direction-form-wrapper').addClass('show-direction');
});

setInterval(function() {
    let start = $('select[name="start-location"]').val();
    let end = $('select[name="end-location"]').val();
    if (start !== '' && end !== '' && start !== end ) {
        $('.direction-prompt-container').addClass('pulse');
    }
}, 750);
