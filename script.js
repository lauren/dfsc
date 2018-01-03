$(document).ready(function () {

    var CONSTANTS = {
        NAV_PADDING: 10
    };

    var navLinks = $('[data-ui="nav-item"]'),
        navElement = $('[data-ui="nav"]'),
        copyrightYearSpan = $('[data-element="year"]'),
        topOfNav = navElement[0].offsetTop,
        navHeight = navElement[0].offsetHeight,
        windowElement = $(window);

    var resetNavClass = function () {
        if (windowElement.scrollTop() >= topOfNav) {
            navElement.addClass('nav-stuck');
        } else {
            navElement.removeClass('nav-stuck');
        }
    };

    copyrightYearSpan.html((new Date().getFullYear()));

    windowElement.on('scroll', function () {
        resetNavClass();
    });

    navLinks.on('click', function (event) {
        var item = event.target.dataset.navItem,
            targetHeaderElement = $('[data-header-item="' + item + '"]')[0],
            targetY = targetHeaderElement.offsetTop - targetHeaderElement.offsetHeight - navHeight - CONSTANTS.NAV_PADDING;

        $('html, body').animate({
          scrollTop: targetY
        }, 1000);
    });
    
});