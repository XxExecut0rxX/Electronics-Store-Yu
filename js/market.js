// alert("script running");

$(document).ready(function ($) {
    var alterClass = function () {
        var ww = document.body.clientWidth;
        if (ww >= 990) {
            $('#accordionCategories').removeClass('accordion');
            // $('.accordion-header').addClass('display-none');
        } else {
            $('#accordionCategories').addClass('accordion');
            // $('.accordion-header').removeClass('display-none');
        };
    };
    $(window).resize(function () {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});