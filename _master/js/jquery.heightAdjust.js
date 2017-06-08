/* start heighAdjust */

(function ($) {
    'use strict';

    $.fn.equalizeHeight = function () {
        var tallestHeight = 0,
            $stories = this;

        $stories.each(function (i, el) {
            var elHeight = $(el).outerHeight();

            if (elHeight > tallestHeight) {
                tallestHeight = elHeight;
            }
        });

        $stories.css('min-height', tallestHeight);

        return $stories;
    }
}(jQuery));

$(document).ready(function () {
    'use strict';

    $('#stories-1')
        .find('.story')
        .equalizeHeight()
        .css('background', 'red');

    $('#stories-2')
        .find('.story')
        .equalizeHeight()
        .css('background', 'green');
});