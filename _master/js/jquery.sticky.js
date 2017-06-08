/* start sticky */

(function ($) {
    $.fn.stickyAside = function () {
        var $stick = this;
        var $foot = $('footer');
        var margin = 20;
        var offtop = $stick.offset().top - margin;
        var offbtm = $foot.offset().top - (margin * 2 + $stick.height());

        $(window).scroll(function () {
            var scrtop = $(window).scrollTop();
            if (scrtop > offtop) {
                $stick.addClass('fixed sticky').css('top', margin);
            }
            if (offtop > scrtop && $stick.hasClass('fixed sticky')) {
                $stick.removeClass('fixed sticky').css('top', 'auto');
            }
            if (scrtop > offbtm && $stick.hasClass('fixed sticky')) {
                $stick.removeClass('fixed sticky').addClass('bottom').css('top', offbtm + margin);
            }
            if (offbtm > scrtop && $stick.hasClass('bottom')) {
                $stick.removeClass('bottom').addClass('fixed sticky').css('top', margin);
            }
        });
    };
})(jQuery);
